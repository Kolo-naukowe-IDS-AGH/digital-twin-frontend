import React, { forwardRef } from 'react'

export interface LabelProps extends React.ComponentPropsWithoutRef<'label'> {
  cn?: string
}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ cn, children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={`flex my-2 text-primary-300 ${cn}`}
        {...props}
      >
        {children}
      </label>
    )
  }
)

export default Label
