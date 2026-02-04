import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Baynunah HR Portal',
  description: 'Modern Employee Self-Service Portal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
