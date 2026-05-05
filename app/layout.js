import './globals.css'
import { Inter } from 'next/font/google'
import Flames from '@/components/Flames'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Impreno Engineering – Complete Machining Solution',
  description:
    'Precision machining company specializing in CNC and VMC operations, delivering high-quality components with accuracy and reliability.',
  icons: {
    icon: '/favicon.ico', // ✅ correct path (from /public)
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} relative bg-white text-stone-900 antialiased`}
      >
        {/* Background flames / ember particles */}
        <Flames />

        {/* Website content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}
