'use client'

import { GanttChartSquare, LaptopMinimal, Moon, Sun } from 'lucide-react'
import Link from 'next/link'

import { COLORS } from '@/constants/color.constants'

import { LogoutButton } from './LogoutButton'
import { MenuItem } from './MenuItem'
import { MENU } from './menu.data'
import { useTheme } from 'next-themes'
import { useState } from 'react'

export function Sidebar() {
	const { theme, setTheme } = useTheme()
	const [active, setActive] = useState<boolean>()

	const handleThemeChange = (theme: any) => {
		setActive(theme)
	}
	const dark = theme === 'dark'
	const light = theme === 'light'
	const system = theme === 'system'

	return (
		<aside className="border-r border-r-white/20 h-full bg-sidebar flex flex-col justify-between">
			<div>
				<Link
					href="/"
					className="flex items-center gap-2.5 p-layout border-b border-b-white/20"
				>
					<GanttChartSquare color={COLORS.primary} size={38} />
					<span className="text-xl font-bold relative">
						AMA Planner
						{/* <span className="absolute -top-1.5 -right-6 text-xs opacity-40 rotate-[18deg] font-normal">
							beta
						</span> */}
					</span>
				</Link>
				<div className="p-3 relative">
					<LogoutButton />
					{MENU.map(item => (
						<MenuItem item={item} key={item.link} />
					))}
					<div className="mt-5 ml-6 w-fit px-4 py-1 bg-[#09090B] border border-white/20 rounded-lg">
						<div className="flex gap-x-4 items-center justify-center">
							<div
								className={`rounded-lg flex items-center justify-center p-1 ${active === !light ? 'border border-[#7551FF]' : 'border border-white/20 bg-transparent'}`}
							>
								<button
									onClick={() => {
										setTheme('light')
										handleThemeChange(light)
									}}
								>
									<Sun size={18} />
								</button>
							</div>
							<div
								className={`rounded-lg flex items-center justify-center p-1 ${active === !dark ? 'border border-[#7551FF]' : 'border border-white/20 bg-transparent'}`}
							>
								<button
									onClick={() => {
										setTheme('dark')
										handleThemeChange(dark)
									}}
								>
									<Moon size={18} />
								</button>
							</div>
							<div
								className={`rounded-lg flex items-center justify-center p-1 ${active === !system ? 'border border-[#7551FF]' : 'border border-white/20 bg-transparent'}`}
							>
								<button
									onClick={() => {
										setTheme('system')
										handleThemeChange(system)
									}}
								>
									<LaptopMinimal size={18} />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<footer className="text-xs opacity-40 font-normal text-center p-layout">
				2025 &copy; With love from{' '}
				<a
					href="https://t.me/amazonooooo"
					target="_blank"
					rel="noreferrer"
					className="hover:text-primary text-brand-300 transition-colors"
				>
					amazonooo
				</a>
				. <br /> All rights reserved.
			</footer>
		</aside>
	)
}
