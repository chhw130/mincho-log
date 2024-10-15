'use client'

import { Post } from '@/types/post'
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Stack,
} from '@chakra-ui/react'
import dayjs from 'dayjs'
import Image from 'next/image'

const PostCard = ({ title, date, description, thumbnail }: Post) => {
  const dateFormat = dayjs(date).format('YYYY/MM/DD')

  return (
    <Card w={'100%'} margin={'5%'}>
      <CardHeader w={'100%'} height={'100%'}>
        <Image
          src={thumbnail}
          alt={title}
          width={100}
          height={100}
          priority
          style={{
            objectFit: 'cover',
          }}
        />
      </CardHeader>
      <CardBody>
        <Stack>
          <Heading>{title}</Heading>
          <Heading>{dateFormat}</Heading>
        </Stack>
      </CardBody>

      <CardFooter>{description}</CardFooter>
    </Card>
  )
}

export default PostCard
