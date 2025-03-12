import { useEffect, useRef, useState } from 'react'

const useToc = () => {
  const [activeTitle, setActiveTitle] = useState('')

  const observer = useRef<IntersectionObserver>()

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      const newHash = decodeURI(window.location.hash)

      setActiveTitle(() => newHash)
    })

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const entryTarget = entry.target.id

        if (!entryTarget.length) {
          return
        }

        setActiveTitle(() => `#${entryTarget}`)
      })
    })
    const headingElements = document.querySelectorAll('h1,h2,h3')
    headingElements.forEach((element) => observer.current?.observe(element))
    return () => observer.current?.disconnect()
  }, [])

  return { activeTitle }
}

export default useToc
