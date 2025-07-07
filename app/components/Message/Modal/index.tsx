'use client'

import { FC, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import { FormItem } from './FormItem'
import { Button } from '../../Button'

import classes from './Modal.module.sass'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false)

  const schema = yup
    .object()
    .shape({
      name: yup.string().required(),
      email: yup.string().email().required(),
      message: yup.string(),
    })
    .required()

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<any>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<any> = async (data: any) => {
    setIsLoading(true)

    const body = {
      name: data.name,
      email: data.email,
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
          onClose()
          toast.success('Your message has been sent successfully!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          })
        }
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (typeof window === 'undefined') return null

  const modalRoot = document.getElementById('modal-root')
  if (!modalRoot || !isOpen) return null

  return ReactDOM.createPortal(
    <div className={classes.overlay} onClick={onClose}>
      <div className={classes.content} onClick={(e) => e.stopPropagation()}>
        <button className={classes.btn} onClick={onClose}>
          &times;
        </button>

        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <FormItem register={register} errors={errors} name="name" label="Name:" />

          <FormItem register={register} errors={errors} name="email" label="Email:" />

          <FormItem register={register} errors={errors} name="message" label="Message:" />

          <div className={classes.fees}>
            <Button text={isLoading ? 'Loading...' : 'Send a message'} disabled={isLoading} />
          </div>
        </form>
      </div>
    </div>,
    modalRoot,
  )
}
