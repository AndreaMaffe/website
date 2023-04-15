import { AnimatePresence } from 'framer-motion'
import { Montserrat, Quicksand } from '@next/font/google'

import '../styles/globals.css'
import '../styles/variables.css'

import CursorFollower from '../components/CursorFollower'
import Navbar from '../components/Navbar'

const montserrat = Montserrat({ subsets: ['latin'] })
const quicksand = Quicksand({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --montserrat-font: ${montserrat.style.fontFamily};
          --quicksand-font: ${quicksand.style.fontFamily};
        }
      `}</style>
      <Navbar />
      <CursorFollower />
        
      <AnimatePresence mode='wait'>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  )
}