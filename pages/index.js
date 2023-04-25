import SpaceCanvas from '../components/SpaceCanvas'
import { motion } from 'framer-motion'
import styles from './Home.module.css'
import { useState } from 'react'

const variants = {
  centered: { x: 0, y: 0, transition: { duration: 2, ease: 'easeOut', type: 'spring', delay: 1 } },
  right: { x: '100vw', transition: { duration: 2 } },
  bottom: { y: '100vh',transition: { duration: 2 } },
}

function AnimatedText() {
  return (
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
  )
}

export default function Home() {
  const [isCanvasLoaded, setIsCanvasLoaded] = useState(false)

  return (
    <main className={styles.home}>
      <SpaceCanvas onLoadFinish={() => setIsCanvasLoaded(true)}/>
      {isCanvasLoaded && <AnimatedText />}
    </main>
  )
}