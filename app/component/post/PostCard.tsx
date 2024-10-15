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
    <Card>
      <CardHeader>
        <Image
          src={thumbnail}
          alt={thumbnail}
          fill
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

//

export default PostCard
