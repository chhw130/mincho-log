'use client'

import { Center, HStack, Icon, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { SiVelog } from 'react-icons/si'

const Footer = () => {
  return (
    <Center as={'footer'} flexDir={'column'} gap={3} padding={'3rem 0'}>
      <Text>Proudly made in 🇰🇷Mincho</Text>
      <HStack>
        <Link href={'https://github.com/chhw130'} target="_blank">
          <Icon fontSize="34px">
            {/* To avoid forwardRef */}
            <span>
              <FaGithub />
            </span>
          </Icon>
        </Link>
        <Link
          href={
            'https://www.linkedin.com/in/%ED%98%84%EC%9A%B0-%EC%B5%9C-71b487282/'
          }
          target="_blank"
        >
          <Icon fontSize="34px">
            <span>
              <FaLinkedin />
            </span>
          </Icon>
        </Link>

        <Link href={'https://velog.io/@chhw130/posts'} target="_blank">
          <Icon fontSize="34px">
            <span>
              <SiVelog />
            </span>
          </Icon>
        </Link>
      </HStack>
    </Center>
  )
}

export default Footer
