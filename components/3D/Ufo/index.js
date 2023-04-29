import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useFrame } from '@react-three/fiber'
import { Vector3 } from 'three'

import useGLTF from '../../../hooks/useGLTF'

export default function Ufo() {
  const model = useGLTF('ufo')
  const ref = useRef()
  
  useFrame((_, delta) => {
    ref.current.rotateOnAxis(new Vector3(0, 1, 0.1), delta)
  })

  return (
    <motion.mesh
      ref={ref}
      position={[0, 1, 0]}
    >
      <primitive object={model} scale={1.2} />
    </motion.mesh>
  )
}