import './globals.css'
import { Inter, Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'] , weight: '400'})

export const metadata = {
  title: 'TalkUp Mental Health Chat',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}