import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar () {
  return (
    <nav className={styles.navbar}>
      <Link href="/">AM</Link>
      <ul>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/work">Work</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}