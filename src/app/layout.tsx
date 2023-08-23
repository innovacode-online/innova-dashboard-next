import './globals.css'
import type { Metadata } from 'next'


import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Innova Dashboard',
  description: 'El mejor curso de Next JS 13 para aprender.',
}

interface Props{
  children: React.ReactNode ;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="es">
      <body className={nunito.className}>
        {children}
      </body>
    </html>
  )
}
