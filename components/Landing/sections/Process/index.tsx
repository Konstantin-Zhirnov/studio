'use client'

import { motion } from 'framer-motion'

import { fadeUp, stagger } from '@/components/motion/motionPresets'
import TiltCard from '@/components/motion/TiltCard'

import styles from './Process.module.css'

const steps = [
  {
    n: '01',
    t: 'Website Discovery: Understanding Your Needs',
    d: 'Quick call + goals, scope, timeline.',
  },
  { n: '02', t: 'Website Design', d: 'Modern layout, clear copy structure, conversion flow.' },
  {
    n: '03',
    t: 'Website Build & Development',
    d: 'Next.js build, responsive, SEO foundations, performance-first.',
  },
  {
    n: '04',
    t: 'Website Launch & Ongoing Support',
    d: 'Deploy, track, and improve. Maintenance available.',
  },
]

export default function Process() {
  return (
    <section id="process" className={styles.section}>
      <div className={styles.container}>
        <motion.div {...fadeUp} className={styles.head}>
          <h2 className={styles.h2}>How We Create Your Website</h2>
          <p className={styles.lead}>Simple and clear—from first call to launch.</p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.25 }}
          className={styles.grid}
        >
          {steps.map((s) => (
            <TiltCard key={s.t} className={styles.card} maxTilt={9}>
              <motion.div {...fadeUp}>
                <div className={styles.num}>{s.n}</div>
                <div className={styles.title}>{s.t}</div>
                <div className={styles.desc}>{s.d}</div>
              </motion.div>
            </TiltCard>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
