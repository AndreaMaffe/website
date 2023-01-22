import { AnimatePresence } from 'framer-motion'
import { Quicksand, Codystar } from '@next/font/google'

import '../styles/globals.css'
import '../styles/variables.css'

import CursorFollower from '../components/CursorFollower'
import Navbar from '../components/Navbar'

const codystar = Codystar({ subsets: ['latin'], weight: '400' })
const quicksand = Quicksand({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --codystar-font: ${codystar.style.fontFamily}
        }
      `}</style>
      <div 
        style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}
        className={quicksand.className}>
        <Navbar />
        <CursorFollower />
        
        <AnimatePresence mode='wait'>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </div>
    </>
  )
}