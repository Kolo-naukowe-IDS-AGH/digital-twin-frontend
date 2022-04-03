import React, { forwardRef } from 'react'

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, ...props }, ref) => {
    // todo: create input error styles
    const isError = error ? `error-class` : ''
    const cn = `w-full py-2 px-4 rounded-md text-primary-100 placeholder-primary-300 focus:outline-none bg-primary-700 ${isError}`

    return <input ref={ref} className={cn} {...props} />
  }
)

export default Input
