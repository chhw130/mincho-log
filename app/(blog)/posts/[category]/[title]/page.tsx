import { Box, Center, Divider } from '@chakra-ui/react'
import PostComment from '@/component/post/PostComment'

interface PageParams {
  params: {
    category: string
    title: string
  }
}

const page = async ({ params: { category, title } }: PageParams) => {
  console.log(category, title)
  // const { data, content } = await parsePostDetail(category, title)

  // const parsingData = data as Post

  // const readingMinute = Math.ceil(readingTime(content).minutes)

  return (
    <Box margin={['0 0.5rem', '0 1.5rem', '0 1.5rem']}>
      {/* <PostDetailHeader
        title={parsingData.title}
        date={parsingData.date}
        category={parsingData.category}
        readingMinute={readingMinute}
      /> */}
      <Center height={'1rem'}>
        <Divider borderColor={'#F4F3EB'} />
      </Center>
      {/* <PostContent content={content} /> */}
      <Center height={'1rem'}>
        <Divider borderColor={'#F4F3EB'} />
      </Center>
      {/* <PostComment /> */}
    </Box>
  )
}

export default page
