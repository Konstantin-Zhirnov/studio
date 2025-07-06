import classes from './Footer.module.sass'
import Image from 'next/image'

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
              <p>Phone:</p>
            </div>
            <p className={classes.text}>(250) 797-28-34</p>
          </a>
        </li>

        <li>
          <a href="mailto:kostya.zhirnov@gmail.com">
            <div className={classes.title}>
              <Image
                src="/images/email.svg"
                alt="Email"
                width={24}
                height={24}
                className={classes.img}
              />

              <p>Email:</p>
            </div>

            <p className={classes.text}>kostya.zhirnov@gmail.com</p>
          </a>
        </li>
      </ul>
    </footer>
  )
}
