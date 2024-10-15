import { Post } from '@/types/post'
import fs from 'fs'
import { sync } from 'glob'
import matter from 'gray-matter'

const MDX_PATH = 'app/(blog)/log/post'

export const parsePost = async (postPath: string): Promise<Post> => {
  const file = fs.readFileSync(postPath, 'utf8')

  const { data } = matter(file)

  return data as Post
}

export const parsePostList = async (): Promise<Post[]> => {
  const paths: string[] = sync(`${MDX_PATH}/**/*.mdx`)

  const posts = await Promise.all(paths.map((postPath) => parsePost(postPath)))

  return posts
}
