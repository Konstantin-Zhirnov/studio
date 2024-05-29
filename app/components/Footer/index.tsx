import React from 'react'

import classes from './Footer.module.sass'
import Image from 'next/image'

const Footer: React.FC = () => {
  return (
    <footer className={classes.container}>
      <ul className={classes.ul}>
        <li>
          <div className={classes.title}>
            <Image src="/images/time.svg" alt="Work hours" width={24} height={24} />
            <p>Work hours:</p>
          </div>
          <p className={classes.text}>Tuesday, Wednesday: 9am - 6pm</p>
        </li>
        <li>
          <div className={classes.title}>
            <Image src="/images/phone.svg" alt="Phone" width={24} height={24} />
            <p>Phone:</p>
          </div>
          <a href="tel:+12507972834" className={classes.text}>
            (250) 797-28-34
          </a>
        </li>
        <li>
          <div className={classes.title}>
            <Image src="/images/email.svg" alt="Email" width={24} height={24} />
            <p>Email:</p>
          </div>
          <a href="mailto:kostya.zhirnov@gmail.com" className={classes.text}>
            kostya.zhirnov@gmail.com
          </a>
        </li>
      </ul>
    </footer>
  )
}

export { Footer }