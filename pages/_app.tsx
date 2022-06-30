import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {motion} from 'framer-motion'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <motion.div initial={{y:-100,opacity:0}} animate={{y:0,opacity:1}} transition={{ ease: "easeOut", duration: 1 }}>
      <Component {...pageProps} />
  </motion.div>

  )
}

export default MyApp
