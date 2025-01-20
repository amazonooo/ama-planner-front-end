import { cn } from '@/utils/cn'
import { forwardRef, type InputHTMLAttributes } from 'react'

interface ITransparentField extends InputHTMLAttributes<HTMLInputElement> {}

export const TransparentField = forwardRef<HTMLInputElement, ITransparentField>(
  ({ className, ...rest }, ref) => {
    
    return (
      <input
        className={cn(
          'bg-transparent border-none focus:outline-0 focus:shadow-transparent w-full'
        )}
        ref={ref}
        {...rest}
      />
    )
  }
)

TransparentField.displayName = 'TransparentField'