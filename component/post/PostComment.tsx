'use client'

import { useTheme } from 'next-themes'
import { useEffect, useRef } from 'react'

export default function Giscus() {
  const ref = useRef<HTMLDivElement>(null)

  const { theme } = useTheme()

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return

    const scriptElem = document.createElement('script')
    scriptElem.src = 'https://giscus.app/client.js'
    scriptElem.async = true
    scriptElem.crossOrigin = 'anonymous'

    scriptElem.setAttribute('data-repo', 'chhw130/mincho-log')
    scriptElem.setAttribute('data-repo-id', 'R_kgDOM-U5Wg')
    scriptElem.setAttribute('data-category', 'Post Comment')
    scriptElem.setAttribute('data-category-id', 'DIC_kwDOM-U5Ws4Cjymw')
    scriptElem.setAttribute('data-mapping', 'pathname')
    scriptElem.setAttribute('data-strict', '0')
    scriptElem.setAttribute('data-reactions-enabled', '1')
    scriptElem.setAttribute('data-emit-metadata', '0')
    scriptElem.setAttribute('data-input-position', 'bottom')
    scriptElem.setAttribute('data-theme', theme as string)
    scriptElem.setAttribute('data-lang', 'ko')

    ref.current.appendChild(scriptElem)
  }, [theme])

  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>(
      'iframe.giscus-frame',
    )
    iframe?.contentWindow?.postMessage(
      { giscus: { setConfig: { theme } } },
      'https://giscus.app',
    )
  }, [theme])

  return <section ref={ref} />
}
