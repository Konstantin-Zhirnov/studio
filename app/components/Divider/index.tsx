import React from 'react'
import { motion } from 'framer-motion'

import { animation } from '@/constants'

import classes from './Divider.module.sass'

const Divider: React.FC = () => {
  return (
    <motion.div
      className={classes.container}
      initial="hidden"
      whileInView="visible"
      variants={animation}
    >
      <div className={classes.divider} />
    </motion.div>
  )
}
export { Divider }
