import PostCard from '@/app/component/post/PostCard'
import { parsePostList } from '@/util'
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

  parsePostList()
  return (
    <Box w={'100%'} maxW={'968px'} margin={'0 auto'}>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>기록</Tab>
          <Tab>학습</Tab>
        </TabList>
        <TabPanels justifyContent={'center'} display={'flex'}>
          <TabPanel w={'80%'}>
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
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
