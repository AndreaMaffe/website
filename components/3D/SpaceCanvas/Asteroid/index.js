import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import AnimatedDraggableMesh from '../../AnimatedDraggableMesh'
import useScreenTo3DConversion from '../../../../hooks/useScreenTo3DConversion'

export default function Asteroid ({
  initialPosition = [0, 0, 0],
  direction = [1, 0],
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
    ref.current.position.x += direction[0] * delta
    ref.current.position.y += direction[1] * delta

    ref.current.rotation.x += delta
    ref.current.rotation.y += delta
    ref.current.rotation.z += delta

    if (ref.current.position.x > 10) {
      ref.current.position.x = -10
    }
    if (ref.current.position.x < -10) {
      ref.current.position.x = 10
    }
    if (ref.current.position.y > 6) {
      ref.current.position.y = -6
    }
    if (ref.current.position.y < -6) {
      ref.current.position.y = 6
    }
  }

  return (
    <AnimatedDraggableMesh 
      ref={ref} 
      modelName='asteroid'
      initialPosition={initialPosition}
      scale={0.005}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      whileNotDragged={whileNotDragged}
    />
  )
}
