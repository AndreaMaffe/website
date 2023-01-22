import { useEffect, useRef } from 'react'
import { useThree } from '@react-three/fiber'
import { Vector3 } from 'three'

export default function useCursorCoordinatesRef({ delay = 0 } = {}) {
  const cursorCoordinatesRef = useRef(new Vector3())
  const { camera } = useThree()

  useEffect(() => {
    const handlePointerMove = (event) => {
      setTimeout(() => {
        const vec = new Vector3(
          ( event.clientX / window.innerWidth ) * 2 - 1,
          - ( event.clientY / window.innerHeight ) * 2 + 1,
          0.5
        ) 
  
        vec.unproject(camera)
        vec.sub(camera.position).normalize()
  
        const distance = - camera.position.z / vec.z
        const pos = new Vector3() 
        pos.copy(camera.position).add(vec.multiplyScalar(distance))
  
        cursorCoordinatesRef.current = pos
      }, delay)
    }
  
    window.addEventListener('pointermove', handlePointerMove)
  
    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
    }
  }, [])

  return cursorCoordinatesRef
}
