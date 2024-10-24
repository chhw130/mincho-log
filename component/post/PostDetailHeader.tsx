'use client'
import { Post } from '@/types/post'
import { CalendarIcon, TimeIcon } from '@chakra-ui/icons'
import { Box, Flex, Heading, HStack, Tag, VStack } from '@chakra-ui/react'
import dayjs from 'dayjs'
import React from 'react'

const PostDetailHeader = ({
  title,
  date,
  category,
  readingMinute,
}: Pick<Post, 'title' | 'date' | 'category' | 'readingMinute'>) => {
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
          <Flex alignItems={'center'} gap={'1rem'}>
            <Heading size="sm">{formatDate}</Heading>

            <Flex alignItems={'center'} gap={'7px'}>
              <TimeIcon />
              <Heading size="sm">{readingMinute} Min Read</Heading>
            </Flex>
          </Flex>
        </HStack>
      </HStack>
    </Box>
  )
}

export default PostDetailHeader
