import Link from 'next/link'

import { IMenuItem } from './menu.interface'

export function MenuItem({ item }: { item: IMenuItem }) {
	return (
		<div>
			<Link
				href={item.link}
				className="flex gap-2.5 items-center py-1.5 mt-4 px-layout bg-transparent transition-colors hover:bg-[#3E3F3F]/40 duration-500 rounded-lg"
			>
				<item.icon />
				<span>{item.name}</span>
			</Link>
		</div>
	)
}
