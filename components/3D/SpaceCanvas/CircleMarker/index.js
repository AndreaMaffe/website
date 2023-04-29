import React from 'react'
import { motion } from 'framer-motion'

const CIRCLE_RADIUS = 80

export default function CircleMarker({ 
  position,
  size = 1 
}) { 
  const style = { 
    width: `${CIRCLE_RADIUS * size}px`, 
    height: `${CIRCLE_RADIUS * size}px`, 
    borderRadius: '100%',
    border: '2px solid white',
    position: 'absolute',
    zIndex: 4,
    pointerEvents: 'none'
  }

  return (
    <motion.div 
      animate={{ scale: [1, 0.5, 1] }}
      transition={{ ease: 'linear', duration: 1.5, repeat: Infinity }}
      style={{ 
        ...style, 
        left: position.x - CIRCLE_RADIUS * size / 2, 
        top: position.y -CIRCLE_RADIUS * size / 2, 
      }} />
  )
}