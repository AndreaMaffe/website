import SpaceCanvas from '../components/3D/SpaceCanvas'
import { motion } from 'framer-motion'
import styles from './Home.module.css'
import { useState } from 'react'
import useIsMobile from '../hooks/useIsMobile'
import Head from 'next/head'

const getVariants = ({ delay }) => ({
  centered: { x: 0, y: 0, transition: { duration: 2, ease: 'easeOut', type: 'spring', delay } },
  right: { x: '100vw', transition: { duration: 2 } },
})

function AnimatedText() {
  const isMobile = useIsMobile()

  return (
    <div className={styles.textContainer}>
      <motion.div 
        key='helloiam'
        variants={getVariants({ delay: 0.2 })}
        initial='right' 
        animate='centered'
        exit='right'
      >
        <span>HELLO! I AM</span>
      </motion.div>
      <motion.div 
        key='andreamafessoni'  
        variants={getVariants({ delay: 0.4 })}
        initial='right'
        animate='centered'
        exit='right'
      >
        <h1>ANDREA MAFESSONI</h1>
      </motion.div>
      <motion.div 
        key='softwareengineer'
        variants={getVariants({ delay: 0.6 })}
        initial='right'
        animate='centered'
        exit='right'
      >
        <h2>
          {'Software Engineer & '}
          {isMobile && <br />}
          {'Front-End Developer '}
        </h2>
      </motion.div>
    </div>
  )
}

export default function Home() {
  const [isCanvasLoaded, setIsCanvasLoaded] = useState(true)

  const onSpaceCanvasLoadProgress = progress => {
    if (progress === 100) { setIsCanvasLoaded(true) }
    else if (progress < 100 && isCanvasLoaded) { setIsCanvasLoaded(false) }
  }

  return (
    <main className={styles.home}>
      <Head>
        <title>Andrea Mafessoni | Software Engineer & Front-End Developer</title>
        <meta
          name="description"
          content="I'm Andrea Mafessoni, a innovative Software Engineer based in Milan, IT. Browse my portfolio and contact me for collaborations and projects."
        />
      </Head>
      <SpaceCanvas onLoadProgress={onSpaceCanvasLoadProgress}/>
      {isCanvasLoaded && <AnimatedText />}
    </main>
  )
}