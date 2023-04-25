import { motion } from 'framer-motion'

import styles from './Progress.module.css'

export default function Progress ({ progress }) {
  return (
    <motion.div 
      key='progress'
      initial={{ scale: 1 }}
      animate={{ 
        scale: [1, 0.8, 1],
        transition: { duration: 1.5, repeat: Infinity }
      }}
      className={styles.progress}
    >
      {`${Math.floor(progress)}%`}
    </motion.div>

  )
}