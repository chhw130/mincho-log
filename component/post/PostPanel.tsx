import { Grid, TabPanel } from '@chakra-ui/react'
import PostCard from './PostCard'
import { filteredPostByCategory } from '@/util'

interface PostPanelProps {
  category: string
}

const PostPanel = async ({ category = 'all' }: PostPanelProps) => {
  const postList = await filteredPostByCategory(category)

  return (
    <TabPanel w={'100%'}>
      <Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)']}
        gap={8}
      >
        {postList.map(
          ({ title, description, date, thumbnail, fileName, category }) => {
            return (
              <PostCard
                key={title}
                title={title}
                description={description}
                date={date}
                thumbnail={thumbnail}
                fileName={fileName}
                category={category}
              />
            )
          },
        )}
      </Grid>
    </TabPanel>
  )
}

export default PostPanel
