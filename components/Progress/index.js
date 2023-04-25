import { motion } from 'framer-motion'

import styles from './Progress.module.css'

export default function Progress ({ progress }) {
  return (
    <motion.div 
      key='progress'
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1, 
        scale: [1, 0.8, 1],
        transition: { repeat: Infinity }
      }}
      className={styles.progress}
    >
      {`${Math.floor(progress)}%`}
    </motion.div>

  )
}