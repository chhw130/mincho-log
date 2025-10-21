import { Box } from '@chakra-ui/react'
import PostComment from '@/component/post/PostComment'
import PostDetailHeader from '@/component/post/PostDetailHeader'
import { Post } from '@/types/post'
import { parsePostDetail, parsePostList } from '@/util'
import readingTime from 'reading-time'
import PostContent from '@/component/post/PostContent'
import { Metadata } from 'next'
import PostProgressBar from '@/component/post/PostProgressBar'

import { generateTitle } from '@/util/post'
import PostToc from '@/component/post/PostToc'

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
      title: mdxTitle,
      description,
      type: 'article',
      publishedTime: '',
      images: [thumbnail],
    },
    twitter: {
      title: mdxTitle,
      description: description,
      images: [thumbnail],
    },
  }
}

export async function generateStaticParams() {
  const posts = await parsePostList()

  return posts.map(({ category, fileName }) => ({
    category,
    title: fileName,
  }))
}

const page = async ({ params: { category, title } }: PageParams) => {
  const { data, content } = await parsePostDetail(category, title)

  const parsingData = data as Post
  const readingMinute = Math.ceil(readingTime(content).minutes)
  const titleList = generateTitle(content)

  return (
    <Box display={['block', 'block', 'flex']}>
      <PostProgressBar />
      <Box margin={['0 0.5rem', '0 1rem', '0 1rem']}>
        <PostDetailHeader
          title={parsingData.title}
          date={parsingData.date}
          category={parsingData.category}
          readingMinute={readingMinute}
        />
        <PostContent content={content} />
        <PostComment />
      </Box>
      <PostToc titleList={titleList} />
    </Box>
  )
}

export default page
