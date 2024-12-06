import { filteredPostByCategory } from '@/util'
import PostList from './PostList'

interface PostPanelProps {
  category: string
}

// type error in vercel deploy
const PostPanel = async ({ category = 'all' }: PostPanelProps) => {
  const postList = await filteredPostByCategory(category)

  return (
    <>
      <PostList postListByCategory={postList} />
    </>
  )
}

export default PostPanel
