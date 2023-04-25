import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { HomeIcon, LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons'

import styles from './Navbar.module.css'

const links = [
  { label: 'about', href: '/about' },
  { label: 'contact', href: '/contact' },
  { label: <LinkedInLogoIcon />, href: 'https://www.linkedin.com/in/andreamafessoni' },
  { label: <GitHubLogoIcon />, href: 'https://github.com/AndreaMaffe' },
]

const backgroundColorsByPathname = {
  '/': 'transparent',
  '/about': '#020022CC',
  '/contact': '#020022CC'
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
    <nav 
      className={styles.navbar} 
      style={{ backgroundColor: backgroundColorsByPathname[pathname] }}
    >
      <NavbarLinkItem 
        label={<HomeIcon />} 
        href='/' 
        selected={pathname === '/'} 
      />
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