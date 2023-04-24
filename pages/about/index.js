import { useState, useRef, useEffect, useMemo } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Vector3 } from 'three'
import { Environment } from '@react-three/drei'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import Image from 'next/image'

import styles from './About.module.css'
import Button from '../../components/Button'
import CursorPointLight from '../../components/SpaceCanvas/CursorPointLight'
import useGLTF from '../../hooks/useGLTF'
import useIsMobile from '../../hooks/useIsMobile'

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

const I_ENJOY_TEXT_OPTIONS = ['telling stories', 'creating experiences']

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
          <Image width={250} height={250} alt='Profile picture of Andrea Mafessoni' src='/static/images/andrea-mafessoni.png' />
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
          <p>Do eiusmod esse nulla ut mollit laborum magna aliqua consectetur labore laboris officia ea duis. Labore incididunt et voluptate est ullamco est consequat cillum ullamco. Consectetur consequat nostrud adipisicing ipsum irure aliquip. Elit eiusmod proident laboris velit nulla nostrud et ea occaecat nisi ullamco et consequat non.</p>
        </div>
      </section>
    </motion.main>
  )
}

function Rocket() {
  const model = useGLTF('rocket')
  const ref = useRef()
  
  useFrame((_, delta) => {
    ref.current.rotateOnAxis(new Vector3(1, 1, 0), Math.cos(delta) / 400)
  })

  return (
    <motion.mesh
      ref={ref}
      position={[0.5, 0.5, 0]}
    >
      <primitive object={model} scale={4} />
    </motion.mesh>
  )
}

function ChangingText ({
  textOptions = [],
  color
}) {
  const [currentTextOptionIndex, setCurrentTextOptionIndex] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(
      () => setCurrentTextOptionIndex(currentIndex => currentIndex + 1 < textOptions.length ? currentIndex + 1 : 0), 
      4000 
    )
    return () => clearTimeout(timeout)
  })
  
  return (
    <AnimatePresence mode='wait'>
      <motion.span 
        key={currentTextOptionIndex}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        style={{ color, display: 'inline-block' }}
      >
        {textOptions[currentTextOptionIndex]}
      </motion.span>
    </AnimatePresence>

  )
}