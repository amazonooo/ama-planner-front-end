import { Button } from '@/components/ui/buttons/Button'
import { COLORS } from '@/constants/color.constants'
import { GanttChartSquare } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
	return (
		<div className="min-h-screen flex items-center justify-center flex-col gap-y-4">
			<div className="flex items-center">
				<h1 className="text-3xl font-bold">Welcome to</h1>
				<Link href="/" className="flex items-center gap-2.5 p-layout">
					<GanttChartSquare color={COLORS.primary} size={38} />
					<span className="text-3xl font-bold relative">
						AMA Planner
						{/* <span className="absolute -top-1.5 -right-6 text-xs opacity-40 rotate-[18deg] font-normal">
							beta
						</span> */}
					</span>
				</Link>
			</div>
			<Link href={'/i'}>
				<Button>Start</Button>
			</Link>
		</div>
	)
}
