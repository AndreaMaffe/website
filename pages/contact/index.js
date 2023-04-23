import { motion } from 'framer-motion'
import { EnvelopeClosedIcon,  } from '@radix-ui/react-icons'

import styles from './Contact.module.css'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import { useState } from 'react'
import Spinner from '../../components/Spinner'

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = e => {
    setIsLoading(true)
    e.preventDefault() 
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  const form = (
    <form onSubmit={onSubmit}>
      <Input 
        id='name'
        name='name'
        placeholder='Your name'
        type='text'
        required
      />
      <Input 
        id='email'
        name='email'
        placeholder='Your email'
        type='email'
        required
      />
      <Textarea 
        id='message' 
        name='email'
        placeholder='Your message'
        required
      />
      <Button 
        icon={<EnvelopeClosedIcon />}
        type='submit'
        onClick={onSubmit}
      >
        Send
      </Button>
    </form>
  )

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
      {isLoading ? <Spinner size='4em' /> : form}
    </motion.main>
  )
}