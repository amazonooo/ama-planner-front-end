'use client'

import Loader from '@/components/ui/Loader'
import { useProfile } from '@/hooks/profile/useProfile'

export function Statistics() {
  const { data, isLoading } = useProfile()

  return isLoading ? (
		<Loader />
	) : (
		<div className="grid grid-cols-4 gap-12 mt-7">
			{data?.statistics.length ? (
				data.statistics.map(statistic => (
					<div
						className="bg-border/5 rounded-lg p-layout bg-[#0d0e0e] border border-[#3E3F3F] text-center hover:-translate-y-2 transition-transform duration-500"
						key={statistic.label}
					>
						<div className="text-xl">{statistic.label}</div>
						<div className="text-3xl font-semibold">{statistic.value}</div>
					</div>
				))
			) : (
				<div>Statistics not loaded!</div>
			)}
		</div>
	)
}
