import PostCard from '@/app/component/post/PostCard'
import { parsePostList } from '@/util'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'

const page = async () => {
  const postList = await parsePostList()

  parsePostList()
  return (
    <Tabs isFitted variant="enclosed">
      <TabList mb="1em">
        <Tab>One</Tab>
        <Tab>Two</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          {postList.map(({ title, description, date, thumbnail }) => {
            return (
              <PostCard
                key={title}
                title={title}
                description={description}
                date={date}
                thumbnail={thumbnail}
              />
            )
          })}
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default page
