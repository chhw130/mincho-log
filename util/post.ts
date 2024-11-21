import { Post } from '@/types/post'

/**
 * post목록에서 검색하는 함수
 */
export const searchPost = (keyword: string, postList: Post[]) => {
  return postList.filter(
    (post) =>
      post.title.includes(keyword) || post.description.includes(keyword),
  )
}
