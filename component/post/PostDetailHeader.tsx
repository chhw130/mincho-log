'use client'
import { Post } from '@/types/post'
import { CalendarIcon } from '@chakra-ui/icons'
import { Box, Heading, HStack, Tag, VStack } from '@chakra-ui/react'
import dayjs from 'dayjs'
import React from 'react'

const PostDetailHeader = ({
  title,
  date,
  category,
}: Omit<Post, 'description' | 'fileName' | 'thumbnail'>) => {
  const formatDate = dayjs(date).format('YYYY-MM-DD')

  return (
    <Box>
      <VStack>
        <Heading size="2xl">{title}</Heading>
      </VStack>
      <HStack justifyContent={'space-between'}>
        <Tag
          size="md"
          colorScheme="teal"
          width={'fit-content'}
          padding={'0.7em 1em'}
        >
          <Heading size="sm"> {category}</Heading>
        </Tag>
        <HStack>
          <CalendarIcon />
          <Heading size="sm">{formatDate}</Heading>
        </HStack>
      </HStack>
    </Box>
  )
}

export default PostDetailHeader
