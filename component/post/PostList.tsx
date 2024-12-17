'use client'

import { List } from '@chakra-ui/react'
import PostCard from './PostCard'
import { Post } from '@/types/post'

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
              <PostCard
                key={title}
                title={title}
                description={description}
                date={date}
                thumbnail={thumbnail}
                fileName={fileName}
                category={category}
                readingMinute={readingMinute}
              />
            )
          },
        )}
      </List.Root>
    </>
  )
}

export default PostList
