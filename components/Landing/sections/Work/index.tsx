'use client'

import { motion } from 'framer-motion'
import styles from './Work.module.css'
import { fadeUp, hoverLift, stagger } from '@/components/motion/motionPresets'

const items = [
  {
    name: 'Laser Cleaning LTD',
    tag: 'Website + Local SEO',
    result: '+ more calls & quote requests',
    link: 'https://laser-cleaning.ca/',
  },
  {
    name: 'PAHLAVAN General Contracting Inc',
    tag: 'Website refresh',
    result: 'Faster load + improved UX',
    link: 'https://pgcdrywall.com/',
  },
  {
    name: 'FindPro',
    tag: 'Service Marketplace App',
    result:
      'Connects people who need services with professionals who provide them — one place for everyone.',
    link: 'https://findpro.ca/',
  },
  { name: 'Service Business', tag: 'Booking + forms', result: 'Less admin time' },
]

export default function Work() {
  return (
    <section id="work" className={styles.section}>
      <div className={styles.container}>
        <motion.div {...fadeUp} className={styles.head}>
          <h2 className={styles.h2}>Recent Work</h2>
          <p className={styles.lead}>
            Replace these placeholders with real case studies (even 3 strong ones improve
            conversions a lot).
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.25 }}
          className={styles.grid}
        >
          {items.map((p) => (
            <motion.article key={p.name} {...hoverLift} className={styles.card}>
              <motion.div {...fadeUp}>
                <div className={styles.top}>
                  <div>
                    <div className={styles.title}>{p.name}</div>

                    <div className={styles.tag}>{p.tag}</div>
                  </div>
                  <div className={styles.badge}>Case</div>
                </div>

                <div className={styles.result}>
                  Result: <span className={styles.strong}>{p.result}</span>
                </div>

                <a
                  className={styles.link}
                  href={p?.link || '#contact'}
                  target={p?.link ? '_blank' : '_self'}
                >
                  Build something like this →
                </a>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
