import { Inter as FontSans } from 'next/font/google'

import { cn } from '@portfolio/utils'

import './global.css'

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
})

export const metadata = {
	title: 'Enea Scaccabarozzi',
	description: 'TODO: Add description',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body
				className={cn(
					'bg-background min-h-screen font-sans antialiased',
					fontSans.variable
				)}
			>
				{children}
			</body>
		</html>
	)
}
