'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import { fadeUp, hoverLift, stagger } from '@/components/motion/motionPresets'

import styles from './Work.module.css'

const items = [
  {
    name: 'Laser Cleaning LTD',
    tag: 'Website + Local SEO',
    result:
      'Significantly Improved Loading Speed + Modern and Professional Design + Full Mobile Responsiveness + Increased Customer Engagement and Leads + Strengthened SEO and Online Promotion',
    link: 'https://laser-cleaning.ca/',
    src: '/images/laser-cleaning.webp',
  },
  {
    name: 'Yankovska School of Rhythmic Gymnastics',
    tag: 'Website refresh',
    result:
      'Significantly Improved Page Load Speed + Modern and Attractive Design + Mobile Responsiveness + Increased Engagement and Traffic',
    link: 'https://yankovskaschool.vercel.app/',
    src: '/images/yankovskaschool.webp',
  },
  {
    name: 'PAHLAVAN General Contracting Inc',
    tag: 'Website refresh',
    result:
      'Significantly Enhanced Loading Speed + Modern and Clean Design + Improved and User-Friendly Navigation + Increased Number of Inquiries and Leads + Improved SEO',
    link: 'https://pgcdrywall.com/',
    src: '/images/pgcdrywall.webp',
  },
  {
    name: 'FindPro',
    tag: 'Service Marketplace App',
    result:
      'Connects people who need services with professionals who provide them — one place for everyone.',
    link: 'https://findpro.ca/',
    src: '/images/findpro.webp',
  },
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

                <div className={styles.wrapper}>
                  <a
                    className={styles.thumb}
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.name} website`}
                  >
                    <Image
                      src={p.src}
                      alt={p.name}
                      fill
                      sizes="(max-width: 980px) 100vw, 240px"
                      className={`${styles.image} ${p.name === 'FindPro' ? styles.imageBright : ''}`}
                      priority={p.name === 'Laser Cleaning LTD'}
                    />
                    <span className={styles.thumbBadge}>Live</span>
                  </a>

                  <div className={styles.result}>
                    Result: <span className={styles.strong}>{p.result}</span>
                  </div>
                </div>

                <a className={styles.link} href={p.link} target="_blank" rel="noopener noreferrer">
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
