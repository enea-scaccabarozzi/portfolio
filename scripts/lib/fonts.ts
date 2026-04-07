export async function loadInterFont(): Promise<ArrayBuffer> {
  const css = await fetch('https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap', {
    headers: { 'User-Agent': 'Mozilla/5.0 (BB10; Touch)' },
  }).then(r => r.text())
  const match = css.match(/src:\s*url\(([^)]+)\)/)
  if (!match) throw new Error('Could not find Inter font URL in Google Fonts CSS')
  return fetch(match[1]).then(r => r.arrayBuffer())
}
