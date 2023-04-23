import { AnimatePresence } from 'framer-motion'
import { Montserrat, Quicksand } from '@next/font/google'

import '../styles/globals.css'
import '../styles/variables.css'

import CursorFollowerYellowSphere from '../components/CursorFollowerYellowSphere'
import Navbar from '../components/Navbar'
import useNextCssRemovalPrevention from '../hooks/useNextCssRemovalPrevention'

const montserrat = Montserrat({ subsets: ['latin'] })
const quicksand = Quicksand({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps, router }) {

  // necessary to fix this issue: https://github.com/vercel/next.js/issues/17464
  useNextCssRemovalPrevention()

  return (
    <>
      <style jsx global>{`
        :root {
          --montserrat-font: ${montserrat.style.fontFamily};
          --quicksand-font: ${quicksand.style.fontFamily};
        }
      `}</style>
      <Navbar />
      <CursorFollowerYellowSphere />
        
      <AnimatePresence mode='wait'>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  )
}