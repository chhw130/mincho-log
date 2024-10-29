'use client'

import { Center, HStack, Icon } from '@chakra-ui/react'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { SiVelog } from 'react-icons/si'

const Footer = () => {
  return (
    <Center as={'footer'} flexDir={'column'} gap={3} padding={'3rem 0'}>
      Proudly made in 🇰🇷Mincho
      <HStack>
        <Link href={'https://github.com/chhw130'} target="_blank">
          <Icon as={FaGithub} w={8} h={8} />
        </Link>
        <Link
          href={
            'https://www.linkedin.com/in/%ED%98%84%EC%9A%B0-%EC%B5%9C-71b487282/'
          }
          target="_blank"
        >
          <Icon as={FaLinkedin} w={8} h={8} />
        </Link>
        <Link href={'https://velog.io/@chhw130/posts'} target="_blank">
          <Icon as={SiVelog} w={8} h={8} />
        </Link>
      </HStack>
    </Center>
  )
}

export default Footer
