import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ChangingText ({
  textOptions = [],
  color
}) {
  const [currentTextOptionIndex, setCurrentTextOptionIndex] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(
      () => setCurrentTextOptionIndex(currentIndex => currentIndex + 1 < textOptions.length ? currentIndex + 1 : 0), 
      4000 
    )
    return () => clearTimeout(timeout)
  })
  
  return (
    <AnimatePresence mode='wait'>
      <motion.span 
        key={currentTextOptionIndex}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        style={{ color, display: 'inline-block' }}
      >
        {textOptions[currentTextOptionIndex]}
      </motion.span>
    </AnimatePresence>

  )
}