import { Box, Center } from '@chakra-ui/react'
import PostComment from '@/component/post/PostComment'
import PostDetailHeader from '@/component/post/PostDetailHeader'
import { Post } from '@/types/post'
import { parsePostDetail } from '@/util'
import readingTime from 'reading-time'
import PostContent from '@/component/post/PostContent'
import { Metadata } from 'next'

interface PageParams {
  params: {
    category: string
    title: string
  }
}

export const generateMetadata = async ({
  params: { category, title },
}: PageParams): Promise<Metadata> => {
  const { data } = await parsePostDetail(category, title)

  const { description, thumbnail } = data as Post

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: '',
      images: [thumbnail],
    },

    twitter: {
      title,
      description: description,
      images: [thumbnail],
    },
  }
}

const page = async ({ params: { category, title } }: PageParams) => {
  const { data, content } = await parsePostDetail(category, title)

  const parsingData = data as Post

  const readingMinute = Math.ceil(readingTime(content).minutes)

  return (
    <Box margin={['0 0.5rem', '0 1.5rem', '0 1.5rem']}>
      <PostDetailHeader
        title={parsingData.title}
        date={parsingData.date}
        category={parsingData.category}
        readingMinute={readingMinute}
      />
      <Center height={'1rem'}>
        <Box divideX="2px" />
      </Center>
      <PostContent content={content} />
      <Center height={'1rem'}>
        <Box divideX="2px" />
      </Center>
      <PostComment />
    </Box>
  )
}

export default page
