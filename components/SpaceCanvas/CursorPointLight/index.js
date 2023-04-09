import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import useCursorPositionRef from '../../../hooks/useCursorPositionRef'
import useScreenTo3DConversion from '../../../hooks/useScreenTo3DConversion'

export default function CursorPointLight() {
  const ref = useRef()
  const cursorPositionRef = useCursorPositionRef()
  const { convertScreenCordinatesTo3DPosition } = useScreenTo3DConversion()

  useFrame(() => {
    const { x, y } = cursorPositionRef.current
    const newPosition = convertScreenCordinatesTo3DPosition(x, y)
    ref.current.position.set(newPosition.x, newPosition.y, 2)
  })

  return (
    <pointLight ref={ref} intensity={2} castShadow />
  )
}