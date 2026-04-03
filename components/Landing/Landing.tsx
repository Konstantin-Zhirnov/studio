import MotionProviders from '../motion/MotionProviders'

import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Work from './sections/Work'
import Pricing from './sections/Pricing'
import Process from './sections/Process'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

import styles from './Landing.module.css'

export default function Landing() {
  return (
    <MotionProviders>
      <main className={styles.page}>
        <div className={styles.bg}>
          <div className={styles.blobA} />
          <div className={styles.blobB} />
          <div className={styles.blobC} />
          <div className={styles.noise} />
        </div>

        <Navbar />

        <Hero />

        <Services />

        <Work />

        <Pricing />

        <Process />

        <Contact />

        <Footer />
      </main>
    </MotionProviders>
  )
}
