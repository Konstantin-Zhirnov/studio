'use client'

import React from 'react'
import { motion } from 'framer-motion'

import { animation } from '@/constants'

import { Divider } from '@/app/components/Divider'

import classes from './Approach.module.sass'

export const Approach = () => {
  return (
    <motion.section className={classes.container}>
      <motion.div
        initial="hidden"
        variants={animation}
        viewport={{ once: true }}
        whileInView="visible"
      >
        <h3 className={classes.title}>Our Approach</h3>

        <Divider />

        <p className={classes.text}>
          We value every client and strive for long-term cooperation. Our development process
          includes the following stages:
        </p>

        <ol className={classes.ol}>
          <li>
            <span>1. Consultation and Analysis:</span> Identifying the needs and requirements of the
            client.
          </li>

          <li>
            <span>2. Planning and Design:</span> Creating the concept and designing the interfaces.
          </li>

          <li>
            <span>3. Development and Testing:</span> Writing code and thoroughly testing the
            product.
          </li>

          <li>
            <span>4. Launch and Support:</span> Implementing the product and providing support
            throughout its lifecycle.
          </li>
        </ol>

        <p className={classes.text}>
          By choosing us, you will gain a reliable partner ready to turn your ideas into modern,
          efficient, and attractive digital solutions. Contact us to discuss your project and
          receive a personalized offer.
        </p>
      </motion.div>
    </motion.section>
  )
}
