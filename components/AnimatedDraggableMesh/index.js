import { useEffect, useState, forwardRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { motion } from 'framer-motion-3d'
import useGLTF from '../../hooks/useGLTF'
import useCursorCoordinatesRef from '../../hooks/useCursorCoordinatesRef'

const AnimatedDraggableMesh = forwardRef(({
  modelName,
  initialPosition = [0, 0, 0],
  onDragStart = () => {},
  onDragEnd = () => {},
  whileDragged = () => {},
  whileNotDragged = () => {},
  scale = 1
}, ref) => {
  const model = useGLTF(modelName)
  const cursorCoordinatesRef = useCursorCoordinatesRef()

  const [isHovered, setIsHovered] = useState(false)
  const [isDragged, setIsDragged] = useState(false)

  const startDragging = () => {
    setIsDragged(true)
    onDragStart()
  }

  const stopDragging = () => {
    setIsDragged(false)
    onDragEnd()
  }

  useEffect(() => {
    window.addEventListener('mouseup', stopDragging)
    return () => window.removeEventListener('mouseup', stopDragging)
  })

  useEffect(() => {
    if (isDragged) {
      document.body.style.cursor = 'grabbing'
      document.body.style.userSelect = 'none'
    }
    else {
      document.body.style.cursor = 'auto'
      document.body.style.userSelect = 'auto'
    }
  }, [isDragged])

  useEffect(() => {
    if (isHovered) document.body.style.cursor = 'grab'
    else document.body.style.cursor = 'auto'
  }, [isHovered])
  
  useFrame((_, delta) => {
    if (isDragged) {
      ref.current.position.x = cursorCoordinatesRef.current.x
      ref.current.position.y = cursorCoordinatesRef.current.y
      whileDragged(delta)
    } else {
      whileNotDragged(delta)
    }
  })

  return (
    <motion.mesh 
      ref={ref} 
      position={initialPosition}
      onPointerEnter={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
      onPointerDown={startDragging}
    >
      <primitive object={model} scale={scale} />
    </motion.mesh>
  )
})

AnimatedDraggableMesh.displayName = 'AnimatedDraggableMesh'
export default AnimatedDraggableMesh