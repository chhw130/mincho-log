import PostCard from '@/component/post/PostCard'
import { getPostCount, parsePostList } from '@/util'
import {
  Box,
  Grid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react'

const page = async () => {
  const postList = await parsePostList()

  const postCount = await getPostCount()

  return (
    <Box>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>기록 ({postCount.all})</Tab>
          <Tab>학습 </Tab>
        </TabList>
        <TabPanels justifyContent={'center'} display={'flex'}>
          <TabPanel w={'100%'}>
            <Grid
              templateColumns={[
                'repeat(1, 1fr)',
                'repeat(1, 1fr)',
                'repeat(2, 1fr)',
              ]}
              gap={8}
            >
              {postList.map(
                ({
                  title,
                  description,
                  date,
                  thumbnail,
                  fileName,
                  category,
                }) => {
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
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default page
