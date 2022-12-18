import { useThree } from '@react-three/fiber'
import { Vector3 } from 'three'

export default function useScreenTo3DConversion() {
  const { camera } = useThree()

  const convert3DPositionToScreenCoordinates = (position) => {
    const newPosition = position.clone()
    newPosition.project(camera)
    newPosition.x = ( newPosition.x + 1) * window.innerWidth / 2
    newPosition.y = - ( newPosition.y - 1) * window.innerHeight / 2
    
    return newPosition
  }

  const convertScreenCordinatesTo3DPosition = (x, y) => {
    const vec = new Vector3(
      ( x / window.innerWidth ) * 2 - 1,
      - ( y / window.innerHeight ) * 2 + 1,
      0.5
    ) 
    vec.unproject(camera)
    vec.sub(camera.position).normalize()

    const distance = - camera.position.z / vec.z
    const position = new Vector3() 
    position.copy(camera.position).add(vec.multiplyScalar(distance))

    return position
  }

  return { convert3DPositionToScreenCoordinates, convertScreenCordinatesTo3DPosition }
}