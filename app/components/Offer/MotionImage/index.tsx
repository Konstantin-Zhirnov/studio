'use client'

import React from 'react'
import cn from 'classnames'
import { motion, useTransform, useSpring, useScroll } from 'framer-motion'

import classes from './MotionImage.module.sass'

interface IProps {
  src: string
  reverse?: boolean
}
export const MotionImage: React.FC<IProps> = ({ src, reverse }) => {
  const ref = React.useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const x = useTransform(scrollYProgress, [0, 0.35], [reverse ? '200%' : '-200%', '0%'])
  const xSpring = useSpring(x, { stiffness: 100, damping: 20 })

  const y = useTransform(scrollYProgress, [0, 0.35], ['200%', '0%'])
  const ySpring = useSpring(y, { stiffness: 100, damping: 20 })

  const opacity = useTransform(scrollYProgress, [0, 1.5], [0, 1])
  const opacitySpring = useSpring(opacity, { stiffness: 100, damping: 20 })

  return (
    <motion.img
      ref={ref}
      className={cn(classes.image, { [classes.reverse]: reverse })}
      src={src}
      alt="Digital Nanaimo"
      style={{
        x: xSpring,
        y: ySpring,
        opacity: opacitySpring,
      }}
    />
  )
}
