import { filteredPostByCategory } from '@/util'
import PostList from './PostList'

interface PostPanelProps {
  category: string
}

const PostPanel = async ({ category = 'all' }: PostPanelProps) => {
  const postList = await filteredPostByCategory(category)

  return <PostList postList={postList} />
}

export default PostPanel
