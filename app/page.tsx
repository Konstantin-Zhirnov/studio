import React from 'react'

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
          title={item.title}
          text={item.text}
          src={item.src}
          ul={item.ul}
          reverse={index % 2 !== 0}
        />
      ))}

      <Approach />

      <Footer />
    </>
  )
}
