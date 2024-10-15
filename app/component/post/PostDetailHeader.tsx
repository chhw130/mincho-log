'use client'

import { Post } from '@/types/post'
import { Divider, Heading } from '@chakra-ui/react'
import dayjs from 'dayjs'
import React from 'react'

const PostDetailHeader = ({
  title,
  thumbnail,
  date,
  category,
}: Omit<Post, 'description' | 'fileName'>) => {
  const formatDate = dayjs(date).format('YYYY-MM-DD')

  return (
    <>
      <Heading size="2xl">{title}</Heading>
      <Heading size="sm">{formatDate}</Heading>
      <Heading size="sm">{category}</Heading>
    </>
  )
}

export default PostDetailHeader
