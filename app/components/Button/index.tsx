import { FC } from 'react'

import classes from './Button.module.sass'

interface IProps {
  text: string
  cb?: () => void
  disabled?: boolean
}

export const Button: FC<IProps> = ({ text, cb, disabled }) => {
  const handleClick = () => {
    if (cb) {
      cb()
    }
  }

  return (
    <button type="submit" className={classes.btn} onClick={handleClick} disabled={disabled}>
      {text}
    </button>
  )
}
