import SpaceCanvas from '../components/SpaceCanvas'
import { motion } from 'framer-motion'
import styles from './Home.module.css'

const variants = {
  centered: { x: 0, y: 0, transition: { duration: 2, ease: 'easeOut', type: 'spring', delay: 2 } },
  right: { x: '100vw', transition: { duration: 2 } },
  bottom: { y: '100vh',transition: { duration: 2 } },
}

export default function Home() {
  return (
    <main className={styles.home}>
      <SpaceCanvas />
      <div className={styles.textContainer}>
        <motion.div 
          key='helloiam'
          variants={variants}
          initial='bottom' 
          animate='centered'
          exit='bottom'
        >
          <span>HELLO! I AM</span>
        </motion.div>
        <motion.div 
          key='andreamafessoni'  
          variants={variants}
          initial='right'
          exit='right'
          animate='centered'
        >
          <h1>ANDREA MAFESSONI</h1>
        </motion.div>
        <motion.div 
          key='softwareengineer'
          variants={variants}
          initial='right'
          exit='right'
          animate='centered'
        >
          <h2>Software Engineer & Front-End Developer </h2>
        </motion.div>
      </div>
    </main>
  )
}