#!/bin/bash

# --- CONFIGURAZIONE ---
SITEMAP_URL="https://eneascaccabarozzi.xyz/sitemap.xml"
PROJECT_ID=$(gcloud config get-value project)
# ----------------------

echo "🚀 Recupero token di accesso..."
TOKEN=$(gcloud auth application-default print-access-token)

echo "📡 Scaricamento sitemap..."
# Usiamo sed per compatibilità universale (Linux/macOS)
URLS=$(curl -s $SITEMAP_URL | sed -n 's/.*<loc>\(.*\)<\/loc>.*/\1/p')

if [ -z "$URLS" ]; then
    echo "❌ Errore: Nessun URL trovato. Verifica se la sitemap è raggiungibile a: $SITEMAP_URL"
    exit 1
fi

echo "✅ URL trovati. Inizio invio alla Indexing API..."
for URL in $URLS; do
    echo -n "➡️ Invio: $URL ... "

    # Catturiamo sia lo status code che il body
    HTTP_RESPONSE=$(curl -s -w "%{http_code}" -X POST \
        -H "Content-Type: application/json" \
        -H "Authorization: Bearer $TOKEN" \
        -H "x-goog-user-project: $PROJECT_ID" \
        -d "{
          \"url\": \"$URL\",
          \"type\": \"URL_UPDATED\"
        }" \
        https://indexing.googleapis.com/v3/urlNotifications:publish)

    HTTP_STATUS=${HTTP_RESPONSE: -3}
    BODY=${HTTP_RESPONSE:0:${#HTTP_RESPONSE}-3}

    if [ "$HTTP_STATUS" -eq 200 ]; then
        echo "SUCCESS ✅ (HTTP 200)"
    else
        echo "FAILED ❌ (HTTP $HTTP_STATUS)"
        echo "Dettaglio: $BODY"
    fi

    sleep 0.2
done
