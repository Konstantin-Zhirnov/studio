import React from 'react'
import { ToastContainer } from 'react-toastify'

import { offers } from '@/constants'

import { Hero } from '@/app/components/Hero'
import { Offer } from '@/app/components/Offer'
import { Approach } from '@/app/components/Approach'
import { Footer } from '@/app/components/Footer'

export default function Home() {
  return (
    <>
      <Hero />

      {offers.map((item, index) => (
        <Offer
          key={item.title}
          reverse={index % 2 !== 0}
          secondText={item.secondText}
          src={item.src}
          text={item.text}
          thirdText={item.thirdText}
          title={item.title}
          ul={item.ul}
        />
      ))}

      <Approach />

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}
