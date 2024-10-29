import { Box, Flex } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Flex flexDir={'column'} h={'100%'} minH={'100vh'}>
      <Header />
      <Box w={'100%'} maxW={'968px'} margin={'0 auto'} flex={'1 1 0%'}>
        {children}
      </Box>
      <Footer />
    </Flex>
  )
}

export default Layout
