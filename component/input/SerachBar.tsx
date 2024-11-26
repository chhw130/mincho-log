'use client'

import { Post } from '@/types/post'
import { throttle } from '@/util/\bthrottling'
import { searchPost } from '@/util/post'
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import { PropsWithChildren, useCallback } from 'react'

interface SearchBarProps extends PropsWithChildren {
  setPostList: any
  postList: Post[]
}

const SerachBar = ({ setPostList, postList }: SearchBarProps) => {
  const handleSearchPostChange = (keyword: string) => {
    setPostList(() => {
      return searchPost(keyword, postList)
    })
  }

  // const memorizedHandleSearchPostChange = useCallback(
  //   (keyword: string) => throttle(handleSearchPostChange(keyword), 10000),
  //   [handleSearchPostChange],
  // )
  // 쓰로틀링 적용
  const throttledSearch = useCallback(
    throttle(handleSearchPostChange, 1000), // 1초 간격으로 쓰로틀링
    [handleSearchPostChange],
  )
  return (
    <Box
      as="form"
      w={'50%'}
      padding={'0rem 1rem 2rem 1rem'}
      onSubmit={(e) => {
        e.preventDefault()
      }}
    >
      <Text padding={'0.3rem 0'}>포스트를 검색해보세요.</Text>
      <Flex>
        <Input
          onChange={({ target }) => throttledSearch(target.value)}
          placeholder="글의 제목이나 설명에 관련된 키워드를 검색하세요."
        />
        <Button type="submit" />
      </Flex>
    </Box>
  )
}

export default SerachBar
