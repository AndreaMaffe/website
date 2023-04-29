import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Vector3 } from 'three'
import AnimatedDraggableMesh from '../../AnimatedDraggableMesh'
import useScreenTo3DConversion from '../../../../hooks/useScreenTo3DConversion'

export default function Ufo({
  initialPosition = [-30, 5, -10],
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
    ref.current.position.x += delta * 2
    ref.current.position.y += Math.cos(ref.current.position.x * 2) / 20

    ref.current.rotateOnAxis(new Vector3(0, 1, 0), Math.cos(delta) / 25)

    if (ref.current.position.x > 30) {
      ref.current.position.x = -30
    }
  }

  return (
    <AnimatedDraggableMesh 
      ref={ref} 
      modelName='ufo'
      initialPosition={initialPosition}
      scale={0.4}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      whileNotDragged={whileNotDragged}
    />
  )
}