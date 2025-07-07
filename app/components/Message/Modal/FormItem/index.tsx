import React from 'react'

import { ErrorMessage } from '@hookform/error-message'

import classes from './FormItem.module.sass'

interface IProps {
  register: any
  errors: any
  name: string
  label: string
}

export const FormItem: React.FC<IProps> = ({ register, name, errors, label }) => {
  const getInput = () => {
    switch (name) {
      case 'message':
        return (
          <textarea
            id={name}
            {...register(name)}
            autoComplete="off"
            className={`${classes.input} ${classes.description}`}
          />
        )
      default:
        return <input id={name} {...register(name)} autoComplete="off" className={classes.input} />
    }
  }

  return (
    <div>
      <label htmlFor={name} className={classes.input_label}>
        {label}
      </label>

      {getInput()}

      <ErrorMessage
        errors={errors as any}
        name={name}
        render={({ message }) => <p className={classes.error}>{message}</p>}
      />
    </div>
  )
}
