'use client'
import { Post } from '@/types/post'
import { Badge, Box, Flex, Heading, HStack, Tag } from '@chakra-ui/react'
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
      <Heading padding={'1rem 0'} size="2xl">
        {title}
      </Heading>
      <HStack justifyContent={'space-between'}>
        <Badge
          size="md"
          variant="solid"
          colorScheme="teal"
          width={'fit-content'}
        >
          <Heading size="sm"> {category}</Heading>
        </Badge>
        <HStack>
          {/* <CalendarIcon /> */}
          <Flex alignItems={'center'} gap={'1rem'}>
            <Heading size="sm">{formatDate}</Heading>

            <Flex alignItems={'center'} gap={'7px'}>
              {/* <TimeIcon /> */}
              <Heading size="sm">{readingMinute} Min Read</Heading>
            </Flex>
          </Flex>
        </HStack>
      </HStack>
    </Box>
  )
}

export default PostDetailHeader
