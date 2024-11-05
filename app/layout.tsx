import type { Metadata } from 'next'
import { ChakraUIProvider } from '../provider/ChakraUIProvider'
import './globals.css'
import Layout from '@/component/layout/Layout'
import { ColorModeScript } from '@chakra-ui/react'
import { META_DATA } from '@/const/const'

export const metadata: Metadata = META_DATA

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ChakraUIProvider>
          <ColorModeScript initialColorMode="system" />
          <Layout>{children}</Layout>
        </ChakraUIProvider>
      </body>
    </html>
  )
}
