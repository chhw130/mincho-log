import PostPanel from '@/component/post/PostPanel'
import { getPostCount } from '@/util'
import { Tabs } from '@chakra-ui/react'

const Page = async () => {
  const postCount = await getPostCount()

  const generatePostCount = Object.entries(postCount)

  return (
    <>
      <Tabs.Root
        lazyMount
        unmountOnExit
        variant="enclosed"
        defaultValue={'all'}
        padding={['0.5rem', '1rem', '1rem']}
      >
        <Tabs.List mb="1em">
          {generatePostCount.map(([category, count]) => (
            <Tabs.Trigger value={category} key={category}>
              {category} ({count})
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {generatePostCount.map(([category]) => (
          <Tabs.Content w={'100%'} h={'100%'} value={category} key={category}>
            <PostPanel category={category} />
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </>
  )
}

export default Page
