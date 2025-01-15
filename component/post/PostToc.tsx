'use client'

import { Box, List, Text } from '@chakra-ui/react'
import { PropsWithChildren, useState } from 'react'

interface PostTocProps {
  titleList: string[]
}

const PostToc = ({ titleList }: PropsWithChildren<PostTocProps>) => {
  const [activeTitle, setActiveTitle] = useState('')

  window.addEventListener('hashchange', () => {
    const newHash = decodeURI(window.location.hash)
    setActiveTitle(() => newHash)
  })

  return (
    <Box
      pos={'sticky'}
      as={'aside'}
      w={'15%'}
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
