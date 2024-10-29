import PostPanel from '@/component/post/PostPanel'
import { getPostCount } from '@/util'
import { Tab, TabList, TabPanels, Tabs } from '@chakra-ui/react'

const page = async () => {
  const postCount = await getPostCount()

  const generatePostCount = Object.entries(postCount)

  return (
    <Tabs isFitted variant="enclosed">
      <TabList mb="1em">
        {generatePostCount.map(([category, count]) => (
          <Tab key={category}>
            {category} ({count})
          </Tab>
        ))}
      </TabList>
      <TabPanels justifyContent={'center'} display={'flex'}>
        {generatePostCount.map(([category]) => (
          <PostPanel category={category} key={category} />
        ))}
      </TabPanels>
    </Tabs>
  )
}

export default page
