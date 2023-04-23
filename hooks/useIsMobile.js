import { useState, useEffect } from 'react'

const MOBILE_BREAKPOINT = 768

export default function useIsMobile() {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0)

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

