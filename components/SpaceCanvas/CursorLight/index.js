import { useRef } from 'react'
import useCursorCoordinates from '../../../hooks/useCursorCoordinatesRef'
import { useFrame } from '@react-three/fiber'

export default function CursorLight() {
  const ref = useRef()
  const cursorCoordinates = useCursorCoordinates()

  useFrame(() => {
    ref.current.position.set(cursorCoordinates.current.x, cursorCoordinates.current.y, 2, -2)
  })

  return (
    <pointLight ref={ref} intensity={2} castShadow />
  )
}