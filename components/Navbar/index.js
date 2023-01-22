import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

import styles from './Navbar.module.css'

const links = [
  { name: 'About', href: '/about' },
  { name: 'Work', href: '/work' },
  { name: 'Contact', href: '/contact' }
]

const colorsByPathname = {
  '/': 'var(--white)',
  '/about': 'var(--blue)',
  '/work': 'var(--white)',
  '/contact': 'var(--white)'
}

function NavbarLinkItem ({ name, href, selected }) {
  return (
    <div className={styles.navbarLinkItem}>
      <Link href={href}>{name}</Link>
      <motion.div 
        key={selected}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        style={{ opacity: selected ? 1 : 0 }}
        className={styles.yellowDot} />
    </div>
  )
} 

export default function Navbar () {
  const { pathname } = useRouter()

  return (
    <nav className={styles.navbar} style={{ color: colorsByPathname[pathname] }}>
      <NavbarLinkItem name='AM' href='/' selected={pathname === '/'} />
      <ul>
        {links.map(({ name, href }) => (
          <li key={name}>
            <NavbarLinkItem name={name} href={href} selected={pathname === href} />
          </li>
        ))}
      </ul>
    </nav>
  )
}