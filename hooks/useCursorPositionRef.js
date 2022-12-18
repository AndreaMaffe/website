import { useEffect, useRef } from 'react'

export default function useCursorPositionRef () {
  const cursorPositionRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event) => cursorPositionRef.current = { x: event.clientX, y: event.clientY }
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return cursorPositionRef
}