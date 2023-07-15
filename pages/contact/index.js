import { motion } from 'framer-motion'
import { EnvelopeClosedIcon,  } from '@radix-ui/react-icons'
import Head from 'next/head'

import styles from './Contact.module.css'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import { useState } from 'react'
import Spinner from '../../components/Spinner'
import sendEmail from '../../lib/sendEmail'

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showErrorMessage, setShowErrorMessage] = useState(false)

  const onSubmit = e => {
    e.preventDefault() 
    setIsLoading(true)

    const formData = new FormData(e.target)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    sendEmail(name, email, message)
      .then(() => setShowSuccessMessage(true))
      .catch(() => setShowErrorMessage(true))
      .finally(() => setIsLoading(false)) 
  }

  const clearMessages = () => {
    if (showSuccessMessage) { setShowSuccessMessage(false) }
    if (showErrorMessage) { setShowErrorMessage(false) }
  }

  const form = (
    <form onSubmit={onSubmit} onChange={clearMessages}>
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
        name='message'
        placeholder='Your message'
        required
      />
      <Button 
        icon={<EnvelopeClosedIcon />}
        type='submit'
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
      <Head>
        <title>Andrea Mafessoni | Contact</title>
        <meta
          name="description"
          content="Hi, I am Andrea Mafessoni. I'm always keen to start new collaborations and projects!"
        />
      </Head>
      <h1>Let&#39;s build something <span style={{ color: 'var(--yellow)' }}>together</span>.</h1>
      {isLoading ? <Spinner size='4em' /> : form}
      {!showSuccessMessage && !showErrorMessage && <div style={{ height: '1em' }} />}
      {showSuccessMessage && <p>Your email was sent <span style={{ color: 'var(--green)' }}>successfully</span>.</p>}
      {showErrorMessage && <p>Something went <span style={{ color: 'var(--red)' }}>wrong</span>. Please try again later.</p>}
    </motion.main>
  )
}