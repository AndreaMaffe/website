import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import Image from 'next/image'

import styles from './About.module.css'
import Rocket from '../../components/3D/Rocket'
import Ufo from '../../components/3D/Ufo'
import Button from '../../components/Button'
import ChangingText from '../../components/ChangingText'
import CursorPointLight from '../../components/3D/SpaceCanvas/CursorPointLight'
import useIsMobile from '../../hooks/useIsMobile'

const I_ENJOY_TEXT_OPTIONS = [
  'telling stories', 
  'creating experiences',
  'making games'
]

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

export default function About() {
  const isMobile = useIsMobile()
  const changingText = useMemo(() => <ChangingText color='var(--yellow)' textOptions={I_ENJOY_TEXT_OPTIONS} />, [])

  return (
    <motion.main
      className={styles.about}
      key='about'
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: 'linear', duration: 1 }}
    >
      <section>
        <div className={styles.sectionTextContainer}>
          <h1>
            I am a
            <span style={{ background: '-webkit-linear-gradient(#FFF069, #73D836)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {isMobile ? <><br />Software Engineer<br /></> : ' Software Engineer '}
            </span>
            based in Milan, IT.
          </h1>
          <p>
            I work from Italy to craft beautiful experiences for people all over the world.
            I am passionate about user experience, software architectures and clean design. 
            My goal is to create nice things for nice people writing simple and elegant code.
          </p>
          <Button
            icon={<ArrowRightIcon />}
            type='submit'
          >
            Let&apos;s work together!
          </Button>
        </div>
        <div className={styles.photoYellowCircle}>
          <Image 
            width={250}
            height={250} 
            alt='Profile picture of Andrea Mafessoni'
            src='/static/images/andrea-mafessoni.png' 
          />
        </div>
      </section>
      <section>
        <div className={styles.rocketYellowCircle}>
          <Canvas>
            <Rocket />
            <CursorPointLight />
            <Environment preset='city' />
          </Canvas>
        </div>
        <div className={styles.sectionTextContainer}>
          <h2>
            {'I enjoy '}
            {changingText}
          </h2>
          <p>In my spare time, I am a published novelist and a passionate Dungeon Master. Quis enim aute proident anim non cillum pariatur tempor exercitation culpa veniam minim ex elit. Enim et veniam sit ut minim consectetur adipisicing. Veniam in velit deserunt officia fugiat ipsum reprehenderit aliquip ex minim pariatur commodo occaecat est. Fugiat incididunt tempor quis cillum aliqua qui id. Ea fugiat dolor ut aliquip consequat elit magna officia.</p>
        </div>
      </section>
      <section>
        <div className={styles.sectionTextContainer}>
          <h2>
            I love <span style={{ color: 'var(--green)' }}>Technology</span>.
          </h2>
          <p>In officia culpa ipsum veniam nostrud. Lorem amet laborum tempor do mollit mollit nisi deserunt ipsum velit laborum. Voluptate ut consectetur culpa cillum cupidatat aliquip. Magna reprehenderit sunt do ut elit aute ad cillum veniam ullamco cillum in laboris. Esse sit consequat tempor labore sint.</p>
        </div>
        <div className={styles.rocketYellowCircle}>
          <Canvas>
            <Ufo />
            <CursorPointLight />
            <Environment preset='city' />
          </Canvas>
        </div>
      </section>
    </motion.main>
  )
}
