import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  require('dotenv').config()

  const body = await req.json()

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  })

  try {
    await transporter.sendMail({
      from: 'kostya.zhirnov@gmail.com',
      to: 'kostya.zhirnov@gmail.com',
      subject: 'Message from website',
      html: `<div><b>Message from website: create-website.ca</b></div>
          <p>
              <b>Name:</b> ${body.name}<br/>
              <b>Email:</b> ${body.email}<br/>
              <b>Message:</b> ${body.message}<br/>
          </p>`,
    })
  } catch (error) {
    // @ts-ignore
    return NextResponse.json({ error: error.message || error.toString() })
  }
  return NextResponse.json({ message: 'Success!' })
}
