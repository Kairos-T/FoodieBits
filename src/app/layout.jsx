import { Inter } from 'next/font/google'
import './globals.css'
import { appInfo } from '../constants'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '{appInfo.appTitle}',
  description: '{appInfo.appDesc}',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
