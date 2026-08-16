import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ff5500] disabled:pointer-events-none disabled:opacity-40 rounded-none shadow-none',
  {
    variants: {
      variant: {
        default:
          'bg-black text-white border border-neutral-800 hover:bg-neutral-900 hover:border-[#ff5500]',
        primary:
          'bg-[#ff5500] text-black font-bold hover:bg-[#e64d00] border border-[#ff5500]',
        destructive:
          'bg-black text-white border border-white hover:bg-white hover:text-black',
        outline:
          'border border-neutral-800 bg-black hover:bg-neutral-900 hover:border-neutral-700 text-neutral-200',
        secondary:
          'bg-neutral-900 text-white border border-neutral-800 hover:border-neutral-700',
        ghost:
          'hover:bg-neutral-900 text-neutral-400 hover:text-white',
        link: 'text-[#ff5500] underline-offset-4 hover:underline normal-case font-sans',
      },
      size: {
        default: 'h-9 px-4 py-2 text-xs',
        sm: 'h-8 px-3 text-xs',
        lg: 'h-10 px-8 text-sm',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }