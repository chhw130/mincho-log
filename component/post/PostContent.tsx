import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { MdxComponents } from '../mdx/MdxComponent'
import remarkBreaks from 'remark-breaks'

const PostContent = ({ content }: { content: string }) => {
  return (
    <MDXRemote
      source={content}
      components={MdxComponents}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkBreaks],
          rehypePlugins: [
            [
              rehypePrettyCode,
              { theme: { dark: 'github-dark-dimmed', light: 'github-light' } },
            ],
            rehypeSlug,
          ],
        },
      }}
    />
  )
}

export default PostContent
