import { writeFile } from 'node:fs/promises'
import { Resvg } from '@resvg/resvg-js'
import satori from 'satori'
import { loadInterFont } from './lib/fonts'

const OUTPUT_DIR = 'public'

function generateSvgFavicon(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <style>
    text { font-family: 'Inter', system-ui, sans-serif; font-weight: 600; font-size: 16px; }
    @media (prefers-color-scheme: light) { text { fill: #1c1917; } }
    @media (prefers-color-scheme: dark) { text { fill: #fafaf9; } }
  </style>
  <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle">ES</text>
</svg>`
}

async function generatePngFavicon(size: number, fontData: ArrayBuffer): Promise<Buffer> {
  const isApple = size === 180
  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          width: size,
          height: size,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: isApple ? '#fafaf9' : 'transparent',
        },
        children: {
          type: 'span',
          props: {
            style: {
              color: '#1c1917',
              fontSize: Math.round(size * 0.5),
              fontFamily: 'Inter',
              fontWeight: 600,
            },
            children: 'ES',
          },
        },
      },
    },
    {
      width: size,
      height: size,
      fonts: [{ name: 'Inter', data: fontData, weight: 600, style: 'normal' }],
    },
  )
  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: size } })
  return Buffer.from(resvg.render().asPng())
}

async function main(): Promise<void> {
  console.log('Generating favicons...')
  const fontData = await loadInterFont()

  await writeFile(`${OUTPUT_DIR}/favicon.svg`, generateSvgFavicon())

  const png16 = await generatePngFavicon(16, fontData)
  const png32 = await generatePngFavicon(32, fontData)
  const png180 = await generatePngFavicon(180, fontData)

  await writeFile(`${OUTPUT_DIR}/favicon-16x16.png`, png16)
  await writeFile(`${OUTPUT_DIR}/favicon-32x32.png`, png32)
  await writeFile(`${OUTPUT_DIR}/apple-touch-icon.png`, png180)
  await writeFile(`${OUTPUT_DIR}/favicon.ico`, png32)

  console.log('Favicons generated successfully')
}

main().catch(e => {
  console.error(e)
  process.exit(1)
})
