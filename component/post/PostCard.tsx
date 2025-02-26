'use client'

import { Post } from '@/types/post'
import { Badge, Card, Flex, Heading, Icon, List, Text } from '@chakra-ui/react'
import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'
import { FaCalendar } from 'react-icons/fa'
import { IoReaderOutline } from 'react-icons/io5'
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
            <Flex direction={'column'} gap={'1.2rem'}>
              <Heading size={'xl'} lineClamp={1}>
                {title}
              </Heading>
              <Badge
                size="md"
                variant="solid"
                colorScheme="teal"
                width={'fit-content'}
              >
                {category}
              </Badge>
              <Text lineClamp={2}>{description}</Text>
            </Flex>
          </Card.Body>
          <Card.Footer display={'flex'} justifyContent={'space-between'}>
            <Flex alignItems={'center'} gap={'7px'}>
              <Icon>
                <span>
                  <FaCalendar />
                </span>
              </Icon>
              <Text>{dateFormat}</Text>
            </Flex>

            <Flex alignItems={'center'} gap={'7px'}>
              <Icon>
                <span>
                  <IoReaderOutline />
                </span>
              </Icon>
              <Text>{readingMinute} Min Read</Text>
            </Flex>
          </Card.Footer>
        </Card.Root>
      </Link>
    </List.Item>
  )
}

export default PostCard
