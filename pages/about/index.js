import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Head from 'next/head'

import styles from './About.module.css'
import Rocket from '../../components/3D/Rocket'
import Ufo from '../../components/3D/Ufo'
import Button from '../../components/Button'
import ChangingText from '../../components/ChangingText'
import CursorPointLight from '../../components/3D/SpaceCanvas/CursorPointLight'
import IconsCarousel from '../../components/IconsCarousel'
import useIsMobile from '../../hooks/useIsMobile'
import Link from 'next/link'

const I_ENJOY_TEXT_OPTIONS = [
  'designing apps',
  'creating games', 
  'dreaming big',
  'telling stories',
  'solving problems',
  'building worlds',
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
      <Head>
        <title>Andrea Mafessoni | About</title>
        <meta
          name="description"
          content="Hi, I am Andrea Mafessoni, a Front-End engineer passionate about UX, Software Development and Clean Code."
        />
      </Head>
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
          <Link href='/contact'>
            <Button
              icon={<ArrowRightIcon />}
              type='submit'
            >
            Let&apos;s work together!
            </Button>
          </Link>
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
            <Environment path='/static/environments/' files="night.hdr" />
          </Canvas>
        </div>
        <div className={styles.sectionTextContainer}>
          <h2>
            {'I enjoy '}
            {isMobile && <br />}
            {changingText}
          </h2>
          <p>
            I am a avid reader, occasional writer, enthustiastic Dungeon Master and constant daydreamer.
            My biggest fun in life is to join new projects where i can express myself by playing with my
            imagination and bringing new ideas on the table.
          </p>
        </div>
      </section>
      <section>
        <div className={styles.sectionTextContainer}>
          <h2>
            I love <span style={{ color: 'var(--green)' }}>Technology</span>.
          </h2>
          <p>
            I am in love with software development and constantly following the latest trends in the industry.
            You can often find me playing with the cutting-edge framework or programming language, 
            always looking for the best tools to do the job.
          </p>
          <IconsCarousel />
        </div>
        <div className={styles.rocketYellowCircle}>
          <Canvas>
            <Ufo />
            <CursorPointLight />
            <Environment path='/static/environments/' files="sunset.hdr" />
          </Canvas>
        </div>
      </section>
    </motion.main>
  )
}

