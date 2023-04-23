import { useEffect } from 'react'

export default function useNextCssRemovalPrevention() {
  useEffect(() => {
    document.querySelectorAll('head > link[data-n-p]').forEach(linkNode => {
      linkNode.removeAttribute('data-n-p')
    })

    const mutationHandler = (mutations) => {
      mutations.forEach(({ target, addedNodes }) => {
        if (target.nodeName === 'HEAD') {
          addedNodes.forEach(node => {
            const el = node
            if (el.nodeName === 'STYLE' && el.hasAttribute('data-n-href')) {
              const href = el.getAttribute('data-n-href')
              if (href) {
                el.setAttribute('data-n-href-perm', href)
                el.removeAttribute('data-n-href')
                el.removeAttribute('media')
              }
            }
          })

          const styleNodes = document.querySelectorAll('head > style[data-n-href-perm]')
          const requiredHrefs = new Set()
          for (let i = styleNodes.length - 1; i >= 0; i--) {
            const el = styleNodes[i]
            if (requiredHrefs.size < 2) {
              const href = el.getAttribute('data-n-href-perm')
              if (href) {
                if (requiredHrefs.has(href)) {
                  el.parentNode.removeChild(el)
                } else {
                  requiredHrefs.add(href)
                }
              }
            } else {
              el.parentNode.removeChild(el)
            }
          }
        }
      })
    }

    const observer = new MutationObserver(mutationHandler)
    observer.observe(document.head, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
    }
  }, [])
}