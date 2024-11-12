'use client'

import { Post } from '@/types/post'
import { Card, Flex, Heading, List, Text } from '@chakra-ui/react'
import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'

const PostCard = ({
  title,
  date,
  description,
  thumbnail,
  fileName,
  category,
  readingMinute,
}: Post) => {
  const dateFormat = dayjs(date).format('YYYY-MM-DD')

  return (
    <List.Item>
      <Link href={`/posts/${category}/${fileName}`}>
        <Card.Root h={'100%'}>
          <Card.Header pos={'relative'} w={'100%'} aspectRatio={'16 / 9'}>
            <Image
              src={thumbnail}
              alt={title}
              fill
              quality={100}
              style={{
                objectFit: 'cover',
              }}
            />
          </Card.Header>
          <Card.Body>
            <Flex direction={'column'} gap={'10px'}>
              <Heading size={'md'} height={'56px'}>
                {title}
              </Heading>
              {/* <Tag
                // size="md"
                // variant="solid"
                // colorScheme="teal"
                // width={'fit-content'}
                >
                  {category}
                </Tag> */}
              <Text>{description}</Text>
            </Flex>
          </Card.Body>
          <Card.Footer display={'flex'} justifyContent={'space-between'}>
            <Flex alignItems={'center'} gap={'7px'}>
              {/* <CalendarIcon /> */}
              <Text>{dateFormat}</Text>
            </Flex>

            <Flex alignItems={'center'} gap={'7px'}>
              {/* <TimeIcon /> */}
              <Text>{readingMinute} Min Read</Text>
            </Flex>
          </Card.Footer>
        </Card.Root>
      </Link>
    </List.Item>
  )
}

export default PostCard
