'use client'

import { Post } from '@/types/post'
import { CalendarIcon } from '@chakra-ui/icons'
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
}: Post) => {
  const dateFormat = dayjs(date).format('YYYY-MM-DD')

  return (
    <List>
      <Link href={`/posts/${category}/${fileName}`}>
        <Card>
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
              <Heading size={'xl'}>{title}</Heading>
              <Tag
                size="md"
                variant="solid"
                colorScheme="teal"
                width={'fit-content'}
              >
                {category}
              </Tag>
              <Text>{description}</Text>
            </Flex>
          </CardBody>
          <CardFooter display={'flex'} alignItems={'center'} gap={'7px'}>
            <CalendarIcon />
            <Text>{dateFormat}</Text>
          </CardFooter>
        </Card>
      </Link>
    </List>
  )
}

export default PostCard
