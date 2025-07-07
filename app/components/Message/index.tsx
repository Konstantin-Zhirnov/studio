'use client'

import { useState } from 'react'

import { Modal } from './Modal'
import { Button } from '@/app/components/Button'

export const Message = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Button text="Contact Us" cb={() => setIsModalOpen(true)} />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
