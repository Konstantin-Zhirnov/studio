'use client'

import { motion } from 'framer-motion'
import styles from './Services.module.css'
import { fadeUp, stagger } from '@/components/motion/motionPresets'
import TiltCard from '@/components/motion/TiltCard'

const cards = [
  {
    title: 'Business Website Design & Creation',
    desc: 'Modern, conversion‑focused websites for local service businesses.',
    bullets: ['Mobile‑first UI', 'Local SEO foundations', 'Fast load times', 'Secure setup'],
  },
  {
    title: 'Web App Creation & Automation',
    desc: 'Simple tools that save time: booking, forms, portals, dashboards.',
    bullets: ['Online booking', 'Quote/request forms', 'Client portals', 'Dashboards & reports'],
  },
  {
    title: 'E-commerce Website Creation',
    desc: 'Sell online with a store that’s easy to manage and SEO‑ready.',
    bullets: ['Shopify/WooCommerce', 'Payments + shipping', 'Product setup', 'Conversion basics'],
  },
]

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <motion.div {...fadeUp} className={styles.head}>
          <h2 className={styles.h2}>Website Creation Services</h2>
          <p className={styles.lead}>
            Create a website for your business without hassle! Our website creation services include
            modern design, fast loading, SEO optimization, and full support—everything you need to
            quickly build a website and attract new customers.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.25 }}
          className={styles.grid}
        >
          {cards.map((c) => (
            <TiltCard key={c.title} className={styles.card} maxTilt={9}>
              <motion.div {...fadeUp}>
                <h3 className={styles.h3}>{c.title}</h3>
                <p className={styles.desc}>{c.desc}</p>

                <ul className={styles.list}>
                  {c.bullets.map((b) => (
                    <li key={b} className={styles.li}>
                      <span className={styles.dot} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <a className={styles.link} href="#contact">
                  Get a quote →
                </a>
              </motion.div>
            </TiltCard>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
