import { useState, useEffect } from 'react'

const MOBILE_BREAKPOINT = 768

export default function useIsMobile() {
  const [width, setWidth] = useState(window.innerWidth)

  function handleWindowSizeChange() {
    setWidth(window.innerWidth)
  }
  
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])
  
  return Boolean(width < MOBILE_BREAKPOINT) 
}

