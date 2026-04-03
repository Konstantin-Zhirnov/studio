'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import styles from './Navbar.module.css'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#process', label: 'Process' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  // Close on Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)

    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  // Prevent background scroll when menu open
  useEffect(() => {
    if (!open) return

    const prev = document.body.style.overflow

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  const onClose = () => {
    setOpen(false)
  }

  return (
    <header className={styles.header}>
      <motion.div
        initial={{ opacity: 0, y: -10, filter: 'blur(6px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={styles.wrap}
      >
        <a className={styles.logo} href="#" onClick={onClose}>
          Web Studio
        </a>

        <nav className={styles.nav}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className={styles.link}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className={styles.right}>
          <a className={styles.phone} href="tel:+12507972834">
            (250) 797‑2834
          </a>

          <a className={styles.cta} href="#contact">
            Get a Free Quote
          </a>

          <button
            className={styles.burger}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
          </button>
        </div>
      </motion.div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.mobileOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={onClose}
          >
            <motion.div
              className={styles.mobilePanel}
              initial={{ opacity: 0, y: -10, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10, filter: 'blur(8px)' }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.mobileTop}>
                <div className={styles.mobileTitle}>Menu</div>

                <button className={styles.mobileClose} onClick={onClose}>
                  Close
                </button>
              </div>

              <div className={styles.mobileLinks}>
                {links.map((l) => (
                  <a key={l.href} href={l.href} className={styles.mobileLink} onClick={onClose}>
                    {l.label}
                  </a>
                ))}
              </div>

              <div className={styles.mobileMeta}>
                <a className={styles.mobileMetaLink} href="tel:+12507972834">
                  (250) 797‑2834
                </a>

                <a className={styles.mobileCTA} href="#contact" onClick={onClose}>
                  Get a Free Quote
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
