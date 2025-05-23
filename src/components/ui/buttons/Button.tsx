import cn from 'clsx'
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

type TypeButton = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
	children,
	className,
	...rest
}: PropsWithChildren<TypeButton>) {
	return (
		<button
			className={cn(
				'linear rounded-lg bg-transparent border border-[#7551FF] py-2 px-7 text-base font-medium text-white transition hover:bg-[#7551FF] active:bg-brand-700',
				className
			)}
			{...rest}
		>
			{children}
		</button>
	)
}
