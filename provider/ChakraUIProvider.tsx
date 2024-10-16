'use client'

import { Box, ChakraProvider } from '@chakra-ui/react'

export function ChakraUIProvider({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <Box w={'100%'} maxW={'968px'} margin={'0 auto'}>
        {children}
      </Box>
    </ChakraProvider>
  )
}
