import { motion, AnimatePresence } from 'framer-motion'
import styles from './Button.module.css'
import { useState } from 'react'

export default function Button (props) {
  const buttonTypeClass = props.secondary ? styles.secondary : styles.primary

  const commonProps = {
    ...props,
    className: `${styles.button} ${buttonTypeClass}`
  }

  return props.icon ? <ButtonWithIcon {...commonProps} /> : <ButtonWithoutIcon {...commonProps} />
}

function ButtonWithIcon (props) {
  const [showIcon, setShowIcon] = useState(false)

  return (
    <button 
      onMouseEnter={() => setShowIcon(true)}
      onMouseLeave={() => setShowIcon(false)}
      onFocus={() => setShowIcon(true)}
      onBlur={() => setShowIcon(false)}
      {...props}
    >
      {props.children}
      <AnimatePresence>
        {showIcon && 
          <motion.span
            initial={{ width: 0, opacity: 0, marginLeft: 0 }}
            animate={{ width: '1em', opacity: 1, marginLeft: '0.5em' }}
            exit={{ width: 0, opacity: 0, marginLeft: 0 }}
          >
            {props.icon}
          </motion.span>
        }
      </AnimatePresence>
    </button>
  )
}

function ButtonWithoutIcon (props) {
  return (
    <button {...props}>
      {props.children}
    </button>
  )
}