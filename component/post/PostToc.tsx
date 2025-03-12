'use client'

import useToc from '@/hooks/useToc'
import { Box, List, Text } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

interface PostTocProps {
  titleList: string[]
}

const PostToc = ({ titleList }: PropsWithChildren<PostTocProps>) => {
  const { activeTitle } = useToc()

  return (
    <Box
      display={['none', 'none', 'block']}
      pos={'sticky'}
      top={'120px'}
      as={'aside'}
      w={'80%'}
      alignSelf={'flex-start'}
      padding={'5px'}
      margin={'20px 0px'}
    >
      <List.Root>
        {titleList.map((el) => {
          const ref = el
            .toLocaleLowerCase()
            .replace(/[^\w\sㄱ-힣-]/g, ' ')
            .trimStart()
            .replaceAll(' ', '-')

          return (
            <List.Item key={el} listStyle={'none'} padding={'1px'}>
              <a href={`#${ref}`}>
                <Text
                  as={'pre'}
                  fontWeight={'bold'}
                  fontSize={'13px'}
                  opacity={
                    ref === activeTitle.replace(/[^\w\sㄱ-힣-]/g, '') ? 1 : 0.5
                  }
                >
                  {el}
                </Text>
              </a>
            </List.Item>
          )
        })}
      </List.Root>
    </Box>
  )
}

export default PostToc
