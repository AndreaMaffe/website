import SpaceCanvas from '../components/SpaceCanvas'
import { motion } from 'framer-motion'
import styles from './Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <SpaceCanvas />
      <h1>
        <motion.div 
          key='helloiam'
          initial={{ y: '100vh' }} 
          animate={{ y: 0 }}
          exit={{ y: '100vh' }} 
          transition={{ duration: 1, ease: 'easeOut', type: 'spring' }}
        >
          Hello! I am
        </motion.div>
        <br/>
        <motion.div 
          key='andreamafessoni'  
          initial={{ x: '100vw' }} 
          exit={{ x: '100vw' }} 
          animate={{ x: 0 }} 
          transition={{ delay: 1, duration: 2, ease: 'easeOut', type: 'spring', bounce: 0.5 }}
          style={{ fontFamily: 'BoldenVan', fontWeight: 400, letterSpacing: '2px', fontSize: 'calc(1.25em + 3vw)' }}
        >
          ANDREA MAFESSONI
        </motion.div>
        <br />
        <motion.div 
          key='softwareengineer'
          initial={{ x: '100vw' }} 
          exit={{ x: '100vw' }} 
          animate={{ x: 0 }} 
          transition={{ delay: 2, duration: 2, ease: 'easeOut', type: 'spring', bounce: 0.5 }}
          style={{ color: '#1e67ff' }}
        >
          Software Engineer & Front-End Developer 
        </motion.div>
      </h1>
    </div>
  )
}