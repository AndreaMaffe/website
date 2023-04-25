import React, { useEffect, useRef } from 'react'
import { motion, useAnimationControls, useAnimationFrame } from 'framer-motion'
import useCursorPositionRef from '../../hooks/useCursorPositionRef'

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
  const cursorPositionRef = useCursorPositionRef()
  const controls = useAnimationControls()
  const ref = useRef(null)

  useEffect(() => {
    const pop = () => controls.start({ scale: [2, 1] })

    const addEventListeners = () => {
      document.addEventListener('mousedown', pop)
    }

    const removeEventListeners = () => {
      document.removeEventListener('mousedown', pop)
    }
  
    addEventListeners()
    return () => removeEventListeners()
  }, [controls])
  
  useAnimationFrame(time => {
    const RANDOM_OFFSET_X = Math.cos(time / 500) * 10
    const RANDOM_OFFSET_Y = Math.cos(time / 300) * 10

    ref.current.style.left = `${cursorPositionRef.current.x + DISTANCE_FROM_CURSOR + RANDOM_OFFSET_X}px` 
    ref.current.style.top = `${cursorPositionRef.current.y + DISTANCE_FROM_CURSOR + RANDOM_OFFSET_Y}px`
  })

  return (
    <motion.div
      ref={ref}
      animate={controls}
      style={style}
    />
  )
}