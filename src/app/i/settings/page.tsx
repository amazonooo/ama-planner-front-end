import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { Settings } from './Settings'
import { Heading } from '@/components/ui/Heading'

export const metadata: Metadata = {
  title: 'Settings',
  ...NO_INDEX_PAGE
}

export default function Page() {
  return <div>
    <Heading title='Settings' />
    <Settings />
  </div>
}
