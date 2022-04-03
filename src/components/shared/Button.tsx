import React, { forwardRef } from 'react'

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  cn?: string
  loading?: boolean
  blue?: boolean
  widthAuto?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      disabled,
      loading = false,
      blue,
      widthAuto = false,
      cn,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={`${
          blue
            ? 'bg-secondary hover:bg-secondary-washed-out'
            : 'bg-accent hover:bg-accent-hover'
        }
        ${widthAuto ? 'w-auto mt-0' : 'w-full mt-6'}
        text-primary-100 font-bold py-2 rounded-md ${cn}`}
        disabled={disabled}
        {...props}
      >
        {!loading ? children : 'Loading...'}
      </button>
    )
  }
)

export default Button
