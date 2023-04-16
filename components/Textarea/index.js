import styles from './Textarea.module.css'

const autoGrow = e => {
  e.target.style.height = '2.5em'
  e.target.style.height = (e.target.scrollHeight)+'px'
}

export default function Textarea (props) {
  return (
    <textarea 
      {...props} 
      className={styles.textarea} 
      onInput={autoGrow}
    />
  )
}