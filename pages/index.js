import SpaceCanvas from '../components/3D/SpaceCanvas'
import { motion } from 'framer-motion'
import styles from './Home.module.css'
import { useState } from 'react'
import useIsMobile from '../hooks/useIsMobile'
import Head from 'next/head'
import Button from '../components/Button'
import Link from 'next/link'
import { ArrowRightIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons'

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
        variants={getVariants({ delay: 0.5 })}
        initial='right'
        animate='centered'
        exit='right'
      >
        <h1>ANDREA MAFESSONI</h1>
      </motion.div>
      <motion.div 
        key='softwareengineer'
        variants={getVariants({ delay: 0.7 })}
        initial='right'
        animate='centered'
        exit='right'
      >
        <h2>Software Engineer & Front-End developer</h2>
      </motion.div>
      <motion.div
        key='ctas'
        variants={getVariants({ delay: 1 })}
        initial='right'
        animate='centered'
        exit='right'
      >
        <Link href='/contact'>
          <Button icon={<EnvelopeClosedIcon />}>{isMobile ? 'Contact' : 'Contact me'}</Button>
        </Link>
        <Link href='/about'>
          <Button icon={<ArrowRightIcon />} secondary>{isMobile ? 'More' : 'Find out more'}</Button>
        </Link>
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
          content="I'm Andrea Mafessoni, a innovative Software Engineer based in Milan, IT. Browse my work and contact me for collaborations and projects."
        />
      </Head>
      <SpaceCanvas onLoadProgress={onSpaceCanvasLoadProgress}/>
      {isCanvasLoaded && <AnimatedText />}
    </main>
  )
}