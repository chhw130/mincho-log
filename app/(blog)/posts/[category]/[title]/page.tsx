import { Box } from '@chakra-ui/react'
import PostComment from '@/component/post/PostComment'
import PostDetailHeader from '@/component/post/PostDetailHeader'
import { Post } from '@/types/post'
import { parsePostDetail } from '@/util'
import readingTime from 'reading-time'
import PostContent from '@/component/post/PostContent'
import { Metadata } from 'next'
import PostProgressBar from '@/component/post/PostProgressBar'

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

  const { title: mdxTitle, description, thumbnail } = data as Post

  return {
    title: mdxTitle,
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
    <>
      <PostProgressBar />
      <Box margin={['0 0.5rem', '0 1.5rem', '0 1.5rem']}>
        <PostDetailHeader
          title={parsingData.title}
          date={parsingData.date}
          category={parsingData.category}
          readingMinute={readingMinute}
        />
        <PostContent content={content} />
        <PostComment />
      </Box>
    </>
  )
}

export default page
