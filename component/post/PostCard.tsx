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
import Link from 'next/link'

const PostCard = ({
  title,
  date,
  description,
  thumbnail,
  fileName,
  category,
}: Post) => {
  const dateFormat = dayjs(date).format('YYYY/MM/DD')

  return (
    <Link href={`/posts/${category}/${fileName}`}>
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
    </Link>
  )
}

export default PostCard
