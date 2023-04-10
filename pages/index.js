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
      <h1>
        <motion.div 
          key='helloiam'
          variants={variants}
          initial='bottom' 
          animate='centered'
          exit='bottom'
        >
          Hello! I am
        </motion.div>
        <br/>
        <motion.div 
          key='andreamafessoni'  
          variants={variants}
          initial='right'
          exit='right'
          animate='centered'
          style={{ fontFamily: 'var(--montserrat-font)', fontWeight: 400, letterSpacing: '-1px', fontSize: 'calc(1.25em + 3vw)' }}
        >
          ANDREA MAFESSONI
        </motion.div>
        <br />
        <motion.div 
          key='softwareengineer'
          variants={variants}
          initial='right'
          exit='right'
          animate='centered'
          style={{ color: 'var(--yellow)' }}
        >
          Software Engineer & Front-End Developer 
        </motion.div>
      </h1>
    </main>
  )
}