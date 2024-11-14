import type { Metadata } from 'next'
import './globals.css'
import Layout from '@/component/layout/Layout'
import { defaultMeatdata } from '@/const/const'
import Gtag from '@/lib/ga/gtag'
import ChakraUIProvider from '@/provider/ChakraUIProvider'

export const metadata: Metadata = defaultMeatdata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <Gtag />
      <body>
        <ChakraUIProvider>
          <Layout>{children}</Layout>
        </ChakraUIProvider>
      </body>
    </html>
  )
}
