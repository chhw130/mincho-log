'use client'

import { Post } from '@/types/post'
import { searchPost } from '@/util/post'
import { Input, Text } from '@chakra-ui/react'
import { PropsWithChildren, useState } from 'react'

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

  return (
    <>
      <Text>포스트를 검색해보세요.</Text>
      <Input onChange={({ target }) => handleSearchPostChange(target.value)} />
    </>
  )
}

export default SerachBar
