import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest w-fit whitespace-nowrap transition-all',
  {
    variants: {
      variant: {
        default:
          'bg-sky text-primary [&>svg]:size-3',
        secondary:
          'bg-coral-light text-coral [&>svg]:size-3',
        destructive:
          'bg-coral text-white [&>svg]:size-3',
        outline:
          'border-2 border-border text-text-dark [&>svg]:size-3',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
export default Badge
