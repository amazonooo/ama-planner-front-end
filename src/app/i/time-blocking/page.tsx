import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { Heading } from '@/components/ui/Heading'
import { TimeBlocking } from './TimeBlocking'

export const metadata: Metadata = {
	title: 'Time Blocking',
	...NO_INDEX_PAGE
}

export default function TimeBLockingPage() {
  return (
		<div>
			<Heading title="Time Blocking" />
			<TimeBlocking />
		</div>
	)
}
