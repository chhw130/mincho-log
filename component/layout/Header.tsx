'use client'

import { Button, Flex, Heading, Text } from '@chakra-ui/react'
import { useTheme } from 'next-themes'
import Link from 'next/link'

const Header = () => {
  const { theme, setTheme } = useTheme()
  const toggleColorMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

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
        <Heading size={'lg'}>민초로그</Heading>
      </Link>
      <Flex alignItems={'center'} gap={'10px'}>
        <Flex as="nav" gap={'20px'}>
          <Link href={'/'}>
            <Text>프로필</Text>
          </Link>
          <Link href={'/'}>
            <Text>포스트</Text>
          </Link>
          <Link href={'/guestbook'}>방명록</Link>
        </Flex>
        <Button onClick={toggleColorMode}>
          {/* {colorMode === 'light' ? <MoonIcon /> : <SunIcon />} */}
        </Button>
      </Flex>
    </Flex>
  )
}

export default Header
