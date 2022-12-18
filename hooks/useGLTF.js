import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function useGLTF (name) {
  const { scene } = useLoader(GLTFLoader, `/static/models/${name}/scene.gltf`)
  return scene
}