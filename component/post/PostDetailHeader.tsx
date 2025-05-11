'use client'

import { Post } from '@/types/post'
import {
  Badge,
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Separator,
} from '@chakra-ui/react'
import dayjs from 'dayjs'
import React from 'react'
import { FaCalendar } from 'react-icons/fa'
import { IoReaderOutline } from 'react-icons/io5'

const PostDetailHeader = ({
  title,
  date,
  category,
  readingMinute,
}: Pick<Post, 'title' | 'date' | 'category' | 'readingMinute'>) => {
  const formatDate = dayjs(date).format('YYYY-MM-DD')

  return (
    <Box>
      <Heading padding={'1rem 0'} size={['3xl', '4xl', '4xl']}>
        {title}
      </Heading>
      <HStack justifyContent={'space-between'}>
        <Badge
          size="lg"
          variant="solid"
          colorScheme="teal"
          width={'fit-content'}
        >
          <Heading size="sm"> {category}</Heading>
        </Badge>
        <HStack>
          <Icon>
            <span>
              <FaCalendar />
            </span>
          </Icon>
          <Flex alignItems={'center'} gap={'1rem'}>
            <Heading size="sm">{formatDate}</Heading>
            <Flex alignItems={'center'} gap={'7px'}>
              <Icon>
                <span>
                  <IoReaderOutline />
                </span>
              </Icon>
              <Heading size="sm">{readingMinute} Min Read</Heading>
            </Flex>
          </Flex>
        </HStack>
      </HStack>
      <Separator margin={'30px 0'} />
    </Box>
  )
}

export default PostDetailHeader
