import { motion } from 'framer-motion'

const style = { 
  borderRadius: '50%',
  border: '4px solid var(--white)', 
  borderTop: '4px solid var(--yellow)',
}

export default function Spinner({ size }) {
  return (
    <motion.div
      style={{
        ...style,
        width: size,
        height: size
      }}
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ ease: 'linear', duration: 1, repeat: Infinity }}
    />
  )
}