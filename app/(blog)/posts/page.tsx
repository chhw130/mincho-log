import PostPanel from '@/component/post/PostPanel'
import { filteredPostByCategory, getPostCount } from '@/util'
import { Tabs } from '@chakra-ui/react'

const page = async () => {
  const postCount = await getPostCount()
  const generatePostCount = Object.entries(postCount)

  return (
    <>
      <Tabs.Root
        lazyMount
        unmountOnExit
        variant="enclosed"
        defaultValue={'all'}
      >
        <Tabs.List mb="1em">
          {generatePostCount.map(([category, count]) => (
            <Tabs.Trigger value={category} key={category}>
              {category} ({count})
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {generatePostCount.map(async ([category = 'all']) => {
          const filteredPost = await filteredPostByCategory(category)
          return (
            <Tabs.Content w={'100%'} h={'100%'} value={category} key={category}>
              <PostPanel filteredPost={filteredPost} />
            </Tabs.Content>
          )
        })}
      </Tabs.Root>
    </>
  )
}

export default page
