import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-none border px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider transition-colors shadow-none',
  {
    variants: {
      variant: {
        default:
          'border-neutral-800 bg-neutral-900 text-neutral-200',
        orange:
          'border-[#ff5500] bg-[#ff5500] text-black font-bold',
        secondary:
          'border-neutral-800 bg-black text-neutral-400',
        destructive:
          'border-white bg-white text-black font-bold',
        outline:
          'border-neutral-800 bg-black text-neutral-300',
        success:
          'border-emerald-900/60 bg-emerald-950/40 text-emerald-400',
        warning:
          'border-[#ff5500]/60 bg-[#ff5500]/20 text-[#ff5500]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
