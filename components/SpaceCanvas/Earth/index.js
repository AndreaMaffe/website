import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { motion } from 'framer-motion-3d'
import useGLTF from '../../../hooks/useGLTF'
import useIsMobile from '../../../hooks/useIsMobile'

const MOBILE_POSITION = { x: 0, y: -8, z: -6 }
const DESKTOP_POSITION = { x: -6, y: 0, z: -6 }

export default function Earth() {
  const ref = useRef()
  const earth = useGLTF('earth')

  const isMobile = useIsMobile()

  useFrame((_, delta) => {
    ref.current.rotation.y += delta/8 
  })

  return (
    <motion.mesh 
      key='earth'
      position={isMobile ? MOBILE_POSITION : DESKTOP_POSITION}
      ref={ref} 
      initial={isMobile ? { y: -30 } : { x: -30 }} 
      animate={isMobile ? MOBILE_POSITION : DESKTOP_POSITION}
      exit={isMobile ? { y: -30, transition: { duration: 4 } } : { x: -50, transition: { duration: 4 } }}
      transition={{ duration: 2, ease: 'easeOut', type: 'spring', bounce: 0.4 }}
    >
      <primitive object={earth} scale={1} />
    </motion.mesh>
  )
}