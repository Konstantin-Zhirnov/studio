import classes from './Footer.module.sass'
import Image from 'next/image'
import { Message } from '@/app/components/Message'

export const Footer = () => {
  return (
    <footer className={classes.container}>
      <ul className={classes.ul}>
        <li>
          <a href="tel:+12507972834">
            <div className={classes.title}>
              <Image
                src="/images/phone.svg"
                alt="Phone"
                width={24}
                height={24}
                className={classes.img}
              />

              <p className={classes.text}>(250) 797-28-34</p>
            </div>
          </a>
        </li>

        <li>
          <Message />
        </li>
      </ul>
    </footer>
  )
}
