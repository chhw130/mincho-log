import type { Metadata } from 'next'
import { ChakraUIProvider } from '../provider/ChakraUIProvider'
import './globals.css'
import Layout from '@/component/layout/Layout'
import { ColorModeScript } from '@chakra-ui/react'
import { defaultMeatdata } from '@/const/const'
import Gtag from '@/lib/ga/gtag'

export const metadata: Metadata = defaultMeatdata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Gtag />
      <body>
        <ChakraUIProvider>
          <ColorModeScript initialColorMode="system" />
          <Layout>{children}</Layout>
        </ChakraUIProvider>
      </body>
    </html>
  )
}
