import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

export default function Test() {
  return (
    <motion.div
      key='test'
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: 'linear', duration: 1 }}
      style={{ height: '100vh', display: 'flex', alignItems: 'center', padding: '100px' }}
    >
      <div>
        <h1>Work</h1>
        <p>This is a work page</p>
      </div>
    </motion.div>
  )
}