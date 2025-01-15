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

/**
 * 게시글 내용 중 해시태그(제목,부제목)을 찾아내는 함수
 * @param content
 * @returns
 */
export const generateTitle = (content: string): string[] => {
  const headings = content
    .split('\n')
    .filter((str) => str.match(/^#+/))
    .filter((text) => !text.includes('####'))
  return headings.map((text) =>
    text.replace(/^#+\s*/, (match) => '  '.repeat(match.length)),
  )
}
