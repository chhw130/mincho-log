import PostContent from '@/component/post/PostContent'
import PostDetailHeader from '@/component/post/PostDetailHeader'
import { Post } from '@/types/post'
import { parsePostDetail } from '@/util'
import { Center, Divider } from '@chakra-ui/react'

interface PageParams {
  params: {
    category: string
    title: string
  }
}

const page = async ({ params: { category, title } }: PageParams) => {
  const { data, content } = await parsePostDetail(category, title)

  const parsingData = data as Post

  return (
    <>
      <PostDetailHeader
        title={parsingData.title}
        thumbnail={parsingData.thumbnail}
        date={parsingData.date}
        category={parsingData.category}
      />
      <Center height={'50px'}>
        <Divider />
      </Center>
      <PostContent content={content} />
    </>
  )
}

export default page
