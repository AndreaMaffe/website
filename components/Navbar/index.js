import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { HomeIcon, LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons'

import styles from './Navbar.module.css'

const links = [
  { label: 'about', href: '/about', ariaLabel: 'Go to about page' },
  { label: 'contact', href: '/contact', ariaLabel: 'Go to contact page'  },
  { label: <LinkedInLogoIcon />, href: 'https://www.linkedin.com/in/andreamafessoni', target: '_blank', ariaLabel: 'See LinkedIn profile' },
  { label: <GitHubLogoIcon />, href: 'https://github.com/AndreaMaffe', target: '_blank', ariaLabel: 'See GitHub profile' },
]

const backgroundColorsByPathname = {
  '/': 'transparent',
  '/about': '#020022CC',
  '/contact': '#020022CC'
}

function NavbarLinkItem ({ label, href, selected, target, ariaLabel }) {
  return (
    <div className={styles.navbarLinkItem}>
      {target ? 
        <a href={href} target={target} aria-label={ariaLabel}>{label}</a> 
        : <Link href={href} aria-label={ariaLabel}>{label}</Link>
      }
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
        ariaLabel='Go to Home page'
        href='/' 
        selected={pathname === '/'} 
      />
      <ul>
        {links.map(({ label, href, target, ariaLabel }) => (
          <li key={href}>
            <NavbarLinkItem 
              label={label}
              ariaLabel={ariaLabel}
              target={target}
              href={href}  
              selected={pathname === href} 
            />
          </li>
        ))}
      </ul>
    </nav>
  )
}