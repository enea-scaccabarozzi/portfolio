interface JsonLdProps<T extends Record<string, unknown>> {
  data: T
}

export function JsonLd<T extends Record<string, unknown>>({ data }: JsonLdProps<T>) {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: XSS-hardened via .replace(/</g, '\\u003c')
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  )
}
