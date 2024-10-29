import { Box } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <Box w={'100%'} maxW={'968px'} margin={'0 auto'}>
        {children}
      </Box>
      <Footer />
    </>
  )
}

export default Layout
