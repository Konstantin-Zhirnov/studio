'use client'

import { motion } from 'framer-motion'
import styles from './Pricing.module.css'
import { fadeUp, hoverLift, stagger } from '@/components/motion/motionPresets'

const tiers = [
  {
    name: 'Starter Website',
    price: 'CAD $970–$2,000',
    note: 'Simple local presence',
    items: ['1–5 pages', 'Contact form', 'Basic SEO', 'Mobile responsive'],
  },
  {
    name: 'Business Website',
    price: 'CAD $2,500–$4,500',
    note: 'Lead‑gen focused',
    items: ['6–12 pages', 'Conversion sections', 'SEO foundations', 'Analytics (optional)'],
    featured: true,
  },
  {
    name: 'E‑commerce',
    price: 'CAD $4,500+',
    note: 'Sell online',
    items: ['Shopify/WooCommerce', 'Payments + shipping', 'Product setup', 'SEO-ready structure'],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.container}>
        <motion.div {...fadeUp} className={styles.head}>
          <h2 className={styles.h2}>Pricing</h2>
          <p className={styles.lead}>
            Transparent ranges for Vancouver Island small businesses. Final pricing depends on scope
            and timeline.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.25 }}
          className={styles.grid}
        >
          {tiers.map((t) => (
            <motion.article
              key={t.name}
              {...hoverLift}
              className={`${styles.card} ${t.featured ? styles.featured : ''}`}
            >
              <motion.div {...fadeUp}>
                <div className={styles.name}>{t.name}</div>
                <div className={styles.price}>{t.price}</div>
                <div className={styles.note}>{t.note}</div>

                <ul className={styles.list}>
                  {t.items.map((i) => (
                    <li key={i} className={styles.li}>
                      <span className={styles.tick}>✓</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>

                <a className={styles.btn} href="#contact">
                  Get a quote
                </a>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>

        <motion.p {...fadeUp} className={styles.disclaimer}>
          Need ongoing updates? Ask about monthly maintenance.
        </motion.p>
      </div>
    </section>
  )
}
