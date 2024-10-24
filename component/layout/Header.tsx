'use client'

import { Button, Flex, Heading, Text, useColorMode } from '@chakra-ui/react'

import Link from 'next/link'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex
      as="header"
      padding={'20px 15px'}
      justifyContent={'space-between'}
      pos={'sticky'}
      top={0}
      zIndex={1000}
      backdropFilter={'saturate(180%) blur(5px)'}
    >
      <Link href={'/'}>
        <Heading>Mincho-log</Heading>
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
