'use client'

import { motion } from 'framer-motion'
import styles from './Hero.module.css'

const ease = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div>
            <motion.p
              className={styles.pill}
              initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.6, ease }}
            >
              Based in Nanaimo • Serving Vancouver Island
            </motion.p>

            <motion.h1
              className={styles.h1}
              initial={{ opacity: 0, y: 14, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.75, ease, delay: 0.05 }}
            >
              Create a Website for Your <span className={styles.grad}>Small Businesses</span> on
              Vancouver Island
            </motion.h1>

            <motion.p
              className={styles.sub}
              initial={{ opacity: 0, y: 14, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.75, ease, delay: 0.12 }}
            >
              Need to create a website? We build fast, SEO-optimized, and mobile-friendly websites
              for small businesses. Get started quickly and grow your business online.
            </motion.p>

            <motion.div
              className={styles.actions}
              initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.65, ease, delay: 0.18 }}
            >
              <a className={styles.primary} href="#contact">
                Create Your Website
              </a>
              <a className={styles.secondary} href="#work">
                See Our Work
              </a>
            </motion.div>

            <motion.div
              className={styles.checks}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.24 }}
            >
              <span>✓ Local SEO setup</span>
              <span>✓ Secure + fast</span>
              <span>✓ Support options</span>
            </motion.div>

            <motion.p
              className={styles.areas}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.65, ease, delay: 0.3 }}
            >
              Serving Nanaimo • Parksville • Qualicum Beach • Courtenay • Victoria
            </motion.p>
          </div>

          <motion.aside
            className={styles.card}
            initial={{ opacity: 0, y: 18, scale: 0.98, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease, delay: 0.08 }}
          >
            <div className={styles.cardTop}>
              <div>
                <div className={styles.cardTitle}>Typical delivery</div>
                <div className={styles.cardText}>1–3 weeks for most small business sites</div>
              </div>
              <div className={styles.badge}>Next.js</div>
            </div>

            <div className={styles.metrics}>
              <div className={styles.metric}>
                <div className={styles.metricK}>Performance</div>
                <div className={styles.metricV}>Fast load times + clean front‑end</div>
              </div>
              <div className={styles.metric}>
                <div className={styles.metricK}>Local SEO</div>
                <div className={styles.metricV}>GBP + on‑page foundations</div>
              </div>
              <div className={styles.metric}>
                <div className={styles.metricK}>Design</div>
                <div className={styles.metricV}>Modern, conversion‑focused UI</div>
              </div>
              <div className={styles.metric}>
                <div className={styles.metricK}>Support</div>
                <div className={styles.metricV}>Maintenance plans available</div>
              </div>
            </div>

            <div className={styles.cardBottom}>
              <a className={styles.miniCTA} href="#contact">
                Request a quote →
              </a>
              <div className={styles.miniNote}>Reply within 1 business day</div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
