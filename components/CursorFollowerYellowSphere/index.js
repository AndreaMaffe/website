import React, { useState, useEffect } from 'react'
import { motion, useAnimationControls } from 'framer-motion'

// "extends": "next/core-web-vitals"

const style = {
  width: '30px',
  height: '30px',
  backgroundColor: 'transparent',
  borderRadius: '100%',
  position: 'fixed',
  boxShadow: '0px 0px 50px 7px #F9FFA1, inset 0px 0px 15px 0px #FFFEA8',
  zIndex: 10,
  pointerEvents: 'none'
}

const DISTANCE_FROM_CURSOR = 30

export default function CursorFollowerYellowSphere () {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const controls = useAnimationControls()

  useEffect(() => {
    const pop = () => controls.start({ scale: [2, 1] })
    const followMouse = ({ clientX, clientY }) => {
      setPosition({ x: clientX, y: clientY })
    }

    const addEventListeners = () => {
      document.addEventListener('mousemove', followMouse)
      document.addEventListener('mousedown', pop)
    }

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', followMouse)
      document.removeEventListener('mousedown', pop)
    }
  
    addEventListeners()
    return () => removeEventListeners()
  }, [controls])

  return (
    <motion.div
      animate={controls}
      style={{
        ...style,
        left: `${position.x + DISTANCE_FROM_CURSOR}px`,
        top: `${position.y + DISTANCE_FROM_CURSOR}px`,
      }}
    />
  )
}