import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useFrame } from '@react-three/fiber'
import { Vector3 } from 'three'

import useGLTF from '../../../hooks/useGLTF'

export default function Rocket() {
  const model = useGLTF('rocket')
  const ref = useRef()
  
  useFrame((_, delta) => {
    ref.current.rotateOnAxis(new Vector3(1, 1, 0), Math.cos(delta) / 400)
  })

  return (
    <motion.mesh
      ref={ref}
      position={[0.5, 0.5, 0]}
    >
      <primitive object={model} scale={4} />
    </motion.mesh>
  )
}