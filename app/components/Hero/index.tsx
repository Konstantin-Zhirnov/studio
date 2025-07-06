'use client'

import React from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

import classes from './Hero.module.sass'

export const Hero: React.FC = () => {
  const speed = -0.5
  const { scrollY, scrollYProgress } = useScroll()
  const y = useTransform(scrollY, (value) => value * speed)

  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])
  const opacitySpring = useSpring(opacity, { stiffness: 100, damping: 20 })

  return (
    <motion.section className={classes.hero}>
      <motion.img
        className={classes['hero-image']}
        src="/images/hero.png"
        alt="Alt"
        style={{ opacity: opacitySpring }}
      />
      <div className={classes['hero-title_container']}>
        <motion.h1 className={classes['hero-title_text']} style={{ y: y }}>
          Digital Nanaimo
        </motion.h1>
      </div>
    </motion.section>
  )
}
