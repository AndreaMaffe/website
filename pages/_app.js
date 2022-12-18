import { AnimatePresence } from 'framer-motion'

import '../styles/globals.css'
import Cursor from '../components/Cursor'
import Navbar from '../components/Navbar'

export default function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <main>
        <Navbar />
        <Cursor />
        
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </main>
    </>
  )
}