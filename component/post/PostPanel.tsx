import PostList from './PostList'
import { Post } from '@/types/post'

interface PostPanelProps {
  filteredPost: Post[]
}

// type error in vercel deploy
const PostPanel = ({ filteredPost }: PostPanelProps) => {
  return (
    <>
      <PostList postListByCategory={filteredPost} />
    </>
  )
}

export default PostPanel
