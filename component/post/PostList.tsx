'use client'

import { List } from '@chakra-ui/react'
import PostCard from './PostCard'
import SerachBar from '../input/SerachBar'
import { Post } from '@/types/post'
import { useState } from 'react'

interface PostListProps {
  postListByCategory: Post[]
}

const PostList = ({ postListByCategory }: PostListProps) => {
  const [postList, setPostList] = useState(postListByCategory)

  return (
    <>
      <SerachBar setPostList={setPostList} postList={postListByCategory} />
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
