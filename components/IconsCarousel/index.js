import { motion } from 'framer-motion'
import { 
  SiAngular,
  SiCss3,
  SiDocker,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSpringboot,
  SiSvelte,
  SiTypescript,
  SiUnity,
  SiVuedotjs
} from '@icons-pack/react-simple-icons'

import styles from './IconsCarousel.module.css'

const ICONS = [
  { icon: SiAngular, key: 'angular' },
  { icon: SiCss3, key: 'css3' },
  { icon: SiDocker, key: 'docker' },
  { icon: SiHtml5, key: 'html5' },
  { icon: SiJavascript, key: 'javascript' },
  { icon: SiMongodb, key: 'mongodb' },
  { icon: SiNetlify, key: 'netlify' },
  { icon: SiNextdotjs, key: 'next.js' },
  { icon: SiNodedotjs, key: 'node.js' },
  { icon: SiReact, key: 'react' },
  { icon: SiSpringboot, key: 'springboot' },
  { icon: SiSvelte, key: 'svelte' },
  { icon: SiTypescript, key: 'typescript' },
  { icon: SiUnity, key: 'unity' },
  { icon: SiVuedotjs, key: 'vue.js' }
]

export default function IconCarousel() {
  const iconsRow = (
    <motion.div 
      animate={{ x: '-100%', transition: { duration: 24, ease: 'linear', repeat: Infinity } }}
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