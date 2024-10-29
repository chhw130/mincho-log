'use client'

import { Button, Flex, Heading, Text, useColorMode } from '@chakra-ui/react'
import Link from 'next/link'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex
      as="header"
      padding={'2rem 2.6rem'}
      justifyContent={'space-between'}
      pos={'sticky'}
      top={0}
      zIndex={1000}
      backdropFilter={'saturate(100%) blur(20px)'}
    >
      <Link href={'/'}>
        <Heading size={'lg'}>MinchoLog</Heading>
      </Link>
      <Flex alignItems={'center'} gap={'10px'}>
        <Flex as="nav" gap={'20px'}>
          <Text>Profile</Text>
          <Text>Blog</Text>
        </Flex>
        <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>
    </Flex>
  )
}

export default Header
