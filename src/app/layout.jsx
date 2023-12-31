import { Inter } from 'next/font/google'
import '../styles/global.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FoodieBits',
  description: 'FoodieBits: Your one-stop destination for all things food. Discover diverse food choices, unravel the art of cooking, and lean into the foodie lifestyle! From mouthwatering visuals to food recommendations, we have it all, we have it all! Feast your eyes, indulge your senses, and let every bite be a story. FoodieBits - where flavour meets fascination!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
