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

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const controls = useAnimationControls()

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove',mMove)
      document.addEventListener('mousedown', () => {
        controls.start({ scale: [2, 1] })
      })
    }

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', mMove)
    }

    const mMove = (el) => {
      setPosition({ x: el.clientX, y: el.clientY })
    }
  
    addEventListeners()
    return () => removeEventListeners()
  }, [])

  return (
    <motion.div
      animate={controls}
      style={{
        ...style,
        left: `${position.x + 15}px`,
        top: `${position.y + 15}px`,
      }}
    />
  )
}

export default Cursor