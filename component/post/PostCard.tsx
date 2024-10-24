'use client'

import { Post } from '@/types/post'
import { CalendarIcon, TimeIcon } from '@chakra-ui/icons'
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  List,
  Tag,
  Text,
} from '@chakra-ui/react'
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
    <List>
      <Link href={`/posts/${category}/${fileName}`}>
        <Card h={'100%'}>
          <CardHeader pos={'relative'} w={'100%'} aspectRatio={'16 / 9'}>
            <Image
              src={thumbnail}
              alt={title}
              fill
              quality={100}
              style={{
                objectFit: 'cover',
              }}
            />
          </CardHeader>
          <CardBody>
            <Flex direction={'column'} gap={'10px'}>
              <Heading size={'md'} noOfLines={2} height={'56px'}>
                {title}
              </Heading>
              <Tag
                size="md"
                variant="solid"
                colorScheme="teal"
                width={'fit-content'}
              >
                {category}
              </Tag>
              <Text noOfLines={2}>{description}</Text>
            </Flex>
          </CardBody>
          <CardFooter display={'flex'} justifyContent={'space-between'}>
            <Flex alignItems={'center'} gap={'7px'}>
              <CalendarIcon />
              <Text>{dateFormat}</Text>
            </Flex>

            <Flex alignItems={'center'} gap={'7px'}>
              <TimeIcon />
              <Text>{readingMinute} Min Read</Text>
            </Flex>
          </CardFooter>
        </Card>
      </Link>
    </List>
  )
}

export default PostCard
