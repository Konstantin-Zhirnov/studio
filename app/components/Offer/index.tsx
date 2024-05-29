'use client'

import React from 'react'
import cn from 'classnames'
import { motion } from 'framer-motion'

import { animation, OfferType } from '@/constants'

import { Divider } from '@/app/components/Divider'
import { MotionImage } from '@/app/components/Offer/MotionImage'
import { MotionUl } from '@/app/components/Offer/MotionUl'

import classes from './Offer.module.sass'

const Offer: React.FC<OfferType & { reverse?: boolean }> = ({ title, text, src, ul, reverse }) => {
  return (
    <motion.section className={classes.container}>
      <motion.h2
        className={classes.title}
        initial="hidden"
        whileInView="visible"
        variants={animation}
      >
        {title}
      </motion.h2>
      <Divider />
      <motion.p
        className={classes.text}
        initial="hidden"
        whileInView="visible"
        variants={animation}
      >
        {text}
      </motion.p>

      <motion.div className={cn(classes.offers, { [classes.reverse]: reverse })}>
        <MotionImage src={src} reverse={reverse} />

        <MotionUl ul={ul} reverse={reverse} />
      </motion.div>
    </motion.section>
  )
}

export { Offer }
