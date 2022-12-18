import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import AnimatedDraggableMesh from '../../AnimatedDraggableMesh'
import useScreenTo3DConversion from '../../../hooks/useScreenTo3DConversion'

export default function Rocket({
  initialPosition = [0, 0, 0],
  onChangePosition = () => {},
  onDragStart = () => {},
  onDragEnd = () => {},
}) {
  const ref = useRef()
  const { convert3DPositionToScreenCoordinates } = useScreenTo3DConversion()

  useFrame(() => {
    const screenPosition = convert3DPositionToScreenCoordinates(ref.current.position)
    onChangePosition(screenPosition)
  })

  const whileNotDragged = delta => {
    ref.current.position.x += delta
    ref.current.position.y += delta

    if (ref.current.position.x > 10) {
      ref.current.position.x = -5
    }
    if (ref.current.position.y > 10) {
      ref.current.position.y = -5
    }
  }

  return (
    <AnimatedDraggableMesh 
      ref={ref} 
      modelName='rocket'
      initialPosition={initialPosition}
      scale={0.5}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      whileNotDragged={whileNotDragged}
    />
  )
}