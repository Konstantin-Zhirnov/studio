'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import { fadeUp } from '@/components/motion/motionPresets'

import styles from './Contact.module.css'

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false)

  const schema = yup
    .object()
    .shape({
      name: yup.string().required(),
      contact: yup.string().required(),
      message: yup.string(),
    })
    .required()

  const { register, handleSubmit, reset } = useForm<any>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<unknown> = async (data: any) => {
    setIsLoading(true)

    const body = {
      name: data.name,
      contact: data.contact,
      message: data.message,
    }

    await fetch('/api/mail', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((res) => {
        if (res.status === 200) {
          reset()

          toast.success('Message delivered!')
        }
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <motion.div {...fadeUp} className={styles.panel}>
          <div className={styles.left}>
            <h2 className={styles.h2}>Tell us about your project</h2>

            <p className={styles.lead}>
              Share your business, goals, and timeline. We’ll reply within 1 business day.
            </p>

            <div className={styles.meta}>
              <div>
                <div className={styles.k}>Phone</div>

                <a className={styles.v} href="tel:+12507972834">
                  (250) 797‑2834
                </a>
              </div>

              <div>
                <div className={styles.k}>Area</div>

                <div className={styles.vDim}>Nanaimo • Vancouver Island</div>
              </div>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <input
              id="name"
              {...register('name')}
              autoComplete="off"
              className={styles.input}
              placeholder="Name"
              name="name"
            />

            <input
              id="contact"
              {...register('contact')}
              autoComplete="off"
              className={styles.input}
              placeholder="Email or phone"
              name="contact"
            />

            <textarea
              id="message"
              {...register('message')}
              autoComplete="off"
              className={styles.textarea}
              placeholder="What do you need? (website, redesign, booking, e‑commerce…)"
              name="message"
            />

            <button type="submit" className={styles.send} disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Send request'}
            </button>

            <div className={styles.note}>
              By submitting, you agree to be contacted about your request.
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
