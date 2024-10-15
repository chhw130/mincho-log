import { Post } from '@/types/post'
import fs from 'fs'
import { sync } from 'glob'
import matter from 'gray-matter'

const MDX_PATH = 'app/(blog)/posts/post'

export const parsePost = async (postPath: string): Promise<Post> => {
  const file = fs.readFileSync(postPath, 'utf8')

  const { data } = matter(file)

  const postPathArr = postPath.split('/')
  const fileName = postPathArr[postPathArr.length - 1].replace('.mdx', '')
  const category = postPathArr[postPathArr.length - 2]

  return { ...data, fileName, category } as Post
}

export const parsePostList = async (): Promise<Post[]> => {
  const paths: string[] = sync(`${MDX_PATH}/**/*.mdx`)

  const posts = await Promise.all(paths.map((postPath) => parsePost(postPath)))

  return posts
}

export const parsePostDetail = async (category: string, title: string) => {
  const file = fs.readFileSync(`${MDX_PATH}/${category}/${title}.mdx`)

  return matter(file)
}
