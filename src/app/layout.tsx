import type { Metadata } from 'next'

import { Noto_Sans } from 'next/font/google'

import './globals.scss'
import { SITE_NAME } from '@/constants/seo.constants'
import { Providers } from './providers'
import { Toaster } from 'sonner'
import { ThemeProvider } from '@/components/ui/theme/theme-provider'

const zen = Noto_Sans({
	subsets: ['cyrillic', 'latin'],
	weight: ['300', '400', '500', '600', '700'],
	display: 'swap',
	variable: '--font-zen',
	style: ['normal']
})

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },
  description: "Best one for planning from amazonooo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang="en">
			<body className={`${zen.className} antialiased`}>
				<Providers>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						{children}

						<Toaster
							theme="dark"
							richColors
							position="bottom-right"
							duration={1500}
						/>
					</ThemeProvider>
				</Providers>
			</body>
		</html>
	)
}