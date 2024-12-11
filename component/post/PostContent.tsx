import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { MdxComponents } from '../mdx/MdxComponent'
import remarkBreaks from 'remark-breaks'
import { MDXComponents } from 'mdx/types'

const PostContent = async ({ content }: { content: string }) => {
  return (
    // @ts-expect-error Server Component
    <MDXRemote
      source={content}
      components={MdxComponents as MDXComponents}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkBreaks],
          rehypePlugins: [[rehypePrettyCode], rehypeSlug],
        },
      }}
    />
  )
}

export default PostContent
