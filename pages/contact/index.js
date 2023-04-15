import { motion } from 'framer-motion'
import { EnvelopeClosedIcon } from '@radix-ui/react-icons'

import styles from './Contact.module.css'
import Button from '../../components/Button'

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

export default function Contact() {
  return (
    <motion.main
      className={styles.contact}
      key='contact'
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: 'linear', duration: 1 }}
    >
      <h1>Let&#39;s build something <span style={{ color: 'var(--yellow)' }}>together</span>.</h1>

      <form onSubmit={e => {e.preventDefault(); console.log(e)}}>
        <input 
          id='name'
          name='name'
          placeholder='Your name'
          type='text'
        />
        <input 
          id='email'
          name='email'
          placeholder='Your email'
          type='email'
        />
        <textarea 
          id='message' 
          name='email'
          placeholder='Your message'
          rows={1}
        />
        <Button 
          icon={<EnvelopeClosedIcon />}
          type='submit'>
            Send
        </Button>
      </form>
    </motion.main>
  )
}