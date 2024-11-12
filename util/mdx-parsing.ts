import { Post } from '@/types/post'
import fs from 'fs'
import { sync } from 'glob'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import path from 'path'

export const BASE_PATH = 'app/(blog)/posts/post'
export const MDX_PATH = path.join(process.cwd(), BASE_PATH)

/**
 * mdx파일을 파싱하는 함수
 * @param postPath
 * @returns
 */
export const parsePost = async (postPath: string): Promise<Post> => {
  const file = fs.readFileSync(postPath, 'utf8')

  const { data, content } = matter(file)

  const readingMinute = Math.ceil(readingTime(content).minutes)

  const postPathArr = postPath.split('/')
  const fileName = postPathArr[postPathArr.length - 1].replace('.mdx', '')
  const category = postPathArr[postPathArr.length - 2]

  return { ...data, fileName, category, readingMinute } as Post
}

/**
 * 모든 경로의 mdx파일을 list로 파싱하는 함수
 * @returns
 */
export const parsePostList = async (): Promise<Post[]> => {
  const paths: string[] = sync(`${MDX_PATH}/**/*.mdx`)

  const posts = await Promise.all(paths.map((postPath) => parsePost(postPath)))

  return posts
}

const getSortedPostByDate = async () => {
  const postList = await parsePostList()

  const sortedPost = postList.sort(
    (a, b) => b.date.getTime() - a.date.getTime(),
  )

  return sortedPost
}

/**
 * category에 따라 post목록을 필터링해주는 함수
 * @param category
 * @returns
 */
export const filteredPostByCategory = async (category: string = 'all') => {
  const postList = await getSortedPostByDate()

  if (category === 'all') {
    return postList
  }

  return postList.filter((ele) => ele.category === category)
}

/**
 * 특정 Mdx파일을 파싱하는 함수
 * @param category
 * @param title
 * @returns
 */
export const parsePostDetail = async (category: string, title: string) => {
  const file = fs.readFileSync(`${MDX_PATH}/${category}/${title}.mdx`)

  return matter(file)
}

export const getPostCount = async () => {
  const postList = await parsePostList()

  const postCountObj: Record<string, number> = {
    all: postList.length,
  }

  postList.forEach(
    (ele) =>
      (postCountObj[ele.category] = (postCountObj[ele.category] || 0) + 1),
  )

  return postCountObj
}
