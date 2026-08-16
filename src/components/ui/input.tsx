import * as React from 'react'
import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-9 w-full rounded-none border border-neutral-800 bg-black px-3 py-1 text-sm shadow-none transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-600 focus-visible:outline-none focus-visible:border-[#ff5500] focus-visible:ring-1 focus-visible:ring-[#ff5500] disabled:cursor-not-allowed disabled:opacity-40 text-white',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input }
