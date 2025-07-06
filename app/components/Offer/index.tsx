'use client'

import React from 'react'
import cn from 'classnames'
import { motion } from 'framer-motion'

import { animation, OfferType } from '@/constants'

import { Divider } from '@/app/components/Divider'
import { MotionImage } from '@/app/components/Offer/MotionImage'
import { MotionUl } from '@/app/components/Offer/MotionUl'

import classes from './Offer.module.sass'

export const Offer: React.FC<OfferType> = ({
  reverse,
  secondText,
  src,
  text,
  thirdText,
  title,
  ul,
}) => {
  return (
    <motion.section className={classes.container}>
      <motion.div
        initial="hidden"
        variants={animation}
        viewport={{ once: true }}
        whileInView="visible"
      >
        <h2 className={classes.title}>{title}</h2>

        <Divider />

        <p className={classes.text}>{text}</p>

        {secondText ? <p className={classes.text}>{secondText}</p> : null}

        {thirdText ? <p className={classes.text}>{thirdText}</p> : null}
      </motion.div>

      <motion.div className={cn(classes.offers, { [classes.reverse]: reverse })}>
        <MotionImage src={src} reverse={reverse} />

        <MotionUl ul={ul} reverse={reverse} />
      </motion.div>
    </motion.section>
  )
}
