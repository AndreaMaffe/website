import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

import styles from './Navbar.module.css'

const links = [
  { label: 'about', href: '/about' },
  { label: 'work', href: '/work' },
  { label: 'contact', href: '/contact' }
]

const colorsByPathname = {
  '/': 'var(--white)',
  '/about': 'var(--white)',
  '/work': 'var(--white)',
  '/contact': 'var(--white)'
}

function NavbarLinkItem ({ label, href, selected }) {
  return (
    <div className={styles.navbarLinkItem}>
      <Link href={href}>{label}</Link>
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
      <NavbarLinkItem label='AM' href='/' selected={pathname === '/'} />
      <ul>
        {links.map(({ label, href }) => (
          <li key={href}>
            <NavbarLinkItem label={label} href={href} selected={pathname === href} />
          </li>
        ))}
      </ul>
    </nav>
  )
}