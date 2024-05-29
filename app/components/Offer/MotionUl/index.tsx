'use client'

import React from 'react'

import { motion, useTransform, useSpring, useScroll } from 'framer-motion'

import classes from './MotionUl.module.sass'

interface IProps {
  ul: { span: string; text: string }[]
  reverse?: boolean
}

const MotionUl: React.FC<IProps> = ({ ul, reverse }) => {
  const ref = React.useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const x = useTransform(scrollYProgress, [0, 0.35], [reverse ? '-50%' : '50%', '0%'])
  const xSpring = useSpring(x, { stiffness: 100, damping: 20 })

  const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1])
  const opacitySpring = useSpring(opacity, { stiffness: 100, damping: 20 })

  return (
    <motion.ul
      ref={ref}
      className={classes.ul}
      style={{
        x: xSpring || null,
        opacity: opacitySpring || null,
      }}
    >
      {ul.map((item, index) => {
        return (
          <li key={index}>
            <span>{item.span}</span> {item.text}
          </li>
        )
      })}
    </motion.ul>
  )
}

export { MotionUl }
