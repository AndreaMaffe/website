import { Canvas } from '@react-three/fiber'
import { useState, useMemo } from 'react'
import { Environment } from '@react-three/drei'
import Asteroid from './Asteroid'
import CursorLight from './CursorLight'
import Earth from './Earth'
import Rocket from './Rocket'
import CircleMarker from './CircleMarker'
import useCursorPositionRef from '../../hooks/useCursorPositionRef'
import distanceBetweenPoints from '../../lib/distanceBetweenPoints'
import generateRandomNumberInRange from '../../lib/generateRandomNumberInRange'

const ROCKET_INITIAL_POSITION = [-8, -10, 0]

const ASTEROID_1_INITIAL_POSITION = [0, 0, 0]
const ASTEROID_1_DIRECTION = [generateRandomNumberInRange(-2, 2), generateRandomNumberInRange(-2, 2)]

export default function SpaceCanvas() {
  const cursorPositionRef = useCursorPositionRef()
  const [isSomethingDragged, setIsSomethingDragged] = useState(false)

  const [rocketPosition, setRocketPosition] = useState({ x: 0, y: 0 })
  const [asteroid1Position, setAsteroid1Position] = useState({ x: 0, y: 0 })

  const circleMarkers = []

  if (!isSomethingDragged) {
    if (distanceBetweenPoints(rocketPosition, cursorPositionRef.current) < 300) {
      circleMarkers.push(  <CircleMarker position={rocketPosition} />)
    }
    if (distanceBetweenPoints(asteroid1Position, cursorPositionRef.current) < 300) {
      circleMarkers.push(  <CircleMarker position={asteroid1Position} size={1.5} />)
    }
  }

  const canvas = useMemo(() => (  
    <Canvas flat>
      <CursorLight />
      <Earth />
      <Rocket 
        initialPosition={ROCKET_INITIAL_POSITION}
        onChangePosition={setRocketPosition} 
        onDragStart={() => setIsSomethingDragged(true)} 
        onDragEnd={() => setIsSomethingDragged(false)} 
      />
      <Asteroid 
        initialPosition={ASTEROID_1_INITIAL_POSITION}
        direction={ASTEROID_1_DIRECTION}
        onChangePosition={setAsteroid1Position} 
        onDragStart={() => setIsSomethingDragged(true)} 
        onDragEnd={() => setIsSomethingDragged(false)} 
      />
      {/* <Ufo /> */}
      <Environment preset="sunset" />
    </Canvas>
  ), [])

  return (
    <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
      {circleMarkers}
      {canvas}
    </div>

  )
}

