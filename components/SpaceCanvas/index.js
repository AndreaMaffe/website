import { Canvas } from '@react-three/fiber'
import { useState, useMemo, useEffect } from 'react'
import { Environment } from '@react-three/drei'
import { motion } from 'framer-motion'
import Asteroid from './Asteroid'
import CursorPointLight from './CursorPointLight'
import Earth from './Earth'
import Rocket from './Rocket'
import CircleMarker from './CircleMarker'
import useCursorPositionRef from '../../hooks/useCursorPositionRef'
import distanceBetweenPoints from '../../lib/distanceBetweenPoints'
import generateRandomNumberInRange from '../../lib/generateRandomNumberInRange'

const ROCKET_INITIAL_POSITION = [-8, -10, 0]

const ASTEROID_INITIAL_POSITION = [-5, -5, 0]
const ASTEROID_DIRECTION = [generateRandomNumberInRange(-2, 2), generateRandomNumberInRange(-2, 2)]

export default function SpaceCanvas() {
  const cursorPositionRef = useCursorPositionRef()
  const [hasMouseMoved, setHasMouseMoved] = useState(false)
  const [isSomethingDragged, setIsSomethingDragged] = useState(false)

  const [rocketPosition, setRocketPosition] = useState({ x: ROCKET_INITIAL_POSITION[0], y: ROCKET_INITIAL_POSITION[1] })
  const [asteroid1Position, setAsteroid1Position] = useState({ x: ASTEROID_INITIAL_POSITION[0], y: ASTEROID_INITIAL_POSITION[1] })

  useEffect(() => {
    const setHasMouseMovedTrue = () => setHasMouseMoved(true)
    document.addEventListener('mousemove', setHasMouseMovedTrue)
    return () => document.removeEventListener('mousemove', setHasMouseMovedTrue)
  }, [])

  const circleMarkers = []

  if (!isSomethingDragged && hasMouseMoved) {
    if (distanceBetweenPoints(rocketPosition, cursorPositionRef.current) < 300) {
      circleMarkers.push(<CircleMarker key='rocket-marker' position={rocketPosition} />)
    }
    if (distanceBetweenPoints(asteroid1Position, cursorPositionRef.current) < 300) {
      circleMarkers.push(<CircleMarker key='asteroid-marker' position={asteroid1Position} size={1.5} />)
    }
  }

  const canvas = useMemo(() => (  
    <Canvas flat>
      <CursorPointLight />
      <Earth />
      <Rocket 
        initialPosition={ROCKET_INITIAL_POSITION}
        onChangePosition={setRocketPosition} 
        onDragStart={() => setIsSomethingDragged(true)} 
        onDragEnd={() => setIsSomethingDragged(false)} 
      />
      <Asteroid 
        initialPosition={ASTEROID_INITIAL_POSITION}
        direction={ASTEROID_DIRECTION}
        onChangePosition={setAsteroid1Position} 
        onDragStart={() => setIsSomethingDragged(true)} 
        onDragEnd={() => setIsSomethingDragged(false)} 
      />
      {/* <Ufo /> */}
      <Environment preset="night" />
    </Canvas>
  ), [])

  return (
    <motion.div 
      key='space-canvas'
      exit={{ opacity: 0, transition: { duration: 3 } }}
      style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: 'var(--blue)' }}>
      {circleMarkers}
      {canvas}
    </motion.div>
  )
}

