import PostPanel from '@/component/post/PostPanel'
import { getPostCount } from '@/util'
import { Tabs } from '@chakra-ui/react'
import { AnimatePresence } from 'motion/react'
import * as motion from 'motion/react-client'

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
          <AnimatePresence mode="wait" key={category}>
            <Tabs.Content w={'100%'} h={'100%'} value={category}>
              <motion.div
                initial={{ y: 20, opacity: 0.6 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <PostPanel category={category} />
              </motion.div>
            </Tabs.Content>
          </AnimatePresence>
        ))}
      </Tabs.Root>
    </>
  )
}

export default Page
