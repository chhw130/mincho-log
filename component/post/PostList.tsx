'use client'

import { List } from '@chakra-ui/react'
import PostCard from './PostCard'
import { Post } from '@/types/post'
import * as motion from 'motion/react-client'

interface PostListProps {
  postList: Post[]
}

const PostList = ({ postList }: PostListProps) => {
  return (
    <>
      <List.Root
        display={'grid'}
        listStyle={'none'}
        gridTemplateColumns={[
          'repeat(1, 1fr)',
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
        ]}
        gap={4}
      >
        {postList.map(
          ({
            title,
            description,
            date,
            thumbnail,
            fileName,
            category,
            readingMinute,
          }) => {
            return (
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                key={title}
              >
                <PostCard
                  title={title}
                  description={description}
                  date={date}
                  thumbnail={thumbnail}
                  fileName={fileName}
                  category={category}
                  readingMinute={readingMinute}
                />
              </motion.div>
            )
          },
        )}
      </List.Root>
    </>
  )
}

export default PostList
