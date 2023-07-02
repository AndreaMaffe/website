import { motion } from 'framer-motion'
import { 
  SiAngular,
  SiAmazonaws,
  SiCss3,
  SiDocker,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiPlaywright,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiSpringboot,
  SiStorybook,
  SiStrapi,
  SiSvelte,
  SiTypescript,
  SiUnity,
  SiVuedotjs
} from '@icons-pack/react-simple-icons'

import styles from './IconsCarousel.module.css'

const ICONS = [
  { icon: SiAngular, key: 'Angular' },
  { icon: SiAmazonaws, key: 'AWS' },
  { icon: SiCss3, key: 'CSS3' },
  { icon: SiDocker, key: 'Docker' },
  { icon: SiHtml5, key: 'HTML5' },
  { icon: SiJavascript, key: 'Javascript' },
  { icon: SiMongodb, key: 'MongoDB' },
  { icon: SiNetlify, key: 'Netlify' },
  { icon: SiNextdotjs, key: 'Next.js' },
  { icon: SiNodedotjs, key: 'Node.js' },
  { icon: SiPlaywright, key: 'Playwright' },
  { icon: SiPostgresql, key: 'PostgreSQL' },
  { icon: SiReact, key: 'React' },
  { icon: SiRedux, key: 'Redux' },
  { icon: SiSpringboot, key: 'Springboot' },
  { icon: SiStorybook, key: 'Storybook' },
  { icon: SiStrapi, key: 'Strapi' },
  { icon: SiSvelte, key: 'Svelte' },
  { icon: SiTypescript, key: 'Yypescript' },
  { icon: SiUnity, key: 'Unity' },
  { icon: SiVuedotjs, key: 'Vue.js' }
]

const ANIMATION_DURATION = 36

export default function IconCarousel() {
  const iconsRow = (
    <motion.div 
      animate={{ x: '-100%', transition: { duration: ANIMATION_DURATION, ease: 'linear', repeat: Infinity } }}
      style={{ display: 'flex', justifyContent: 'flex-start', gap: '24px' }}
    >
      {ICONS.map(({ icon: Icon, key }) => (
        <motion.span
          whileHover={{ scale: 1.2 }}
          key={key}
        >
          <Icon size={36} color='#c7c7c7' />
        </motion.span>
      ))}
    </motion.div>
  )

  return (
    <div className={styles.iconsCarousel}>
      {iconsRow}
      {iconsRow}
    </div>
  )
}