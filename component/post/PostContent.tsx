import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { MdxComponents } from '../mdx/MdxComponent'
import remarkBreaks from 'remark-breaks'
import type { MDXRemoteProps } from 'next-mdx-remote/rsc'

const PostContent = async ({ content }: { content: string }) => {
  return (
    <MDXRemote
      source={content}
      components={MdxComponents as MDXRemoteProps['components']}
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
