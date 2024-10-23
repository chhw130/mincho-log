import { Post } from '@/types/post'
import { Box, Heading, VStack } from '@chakra-ui/react'
import dayjs from 'dayjs'
import Image from 'next/image'
import React from 'react'

const PostDetailHeader = ({
  title,
  thumbnail,
  date,
  category,
}: Omit<Post, 'description' | 'fileName'>) => {
  const formatDate = dayjs(date).format('YYYY-MM-DD')

  return (
    <VStack>
      <Box w={'100%'}>
        <Image
          src={thumbnail}
          width={100}
          height={100}
          alt={title}
          priority
          style={{
            objectFit: 'cover',
          }}
        />
      </Box>
      <Box>
        <Heading size="2xl">{title}</Heading>
        <Heading size="sm">{formatDate}</Heading>
        <Heading size="sm">{category}</Heading>
      </Box>
    </VStack>
  )
}

export default PostDetailHeader
