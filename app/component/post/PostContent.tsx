// @ts-expect-error no types
import remarkA11yEmoji from '@fec/remark-a11y-emoji'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'
import { MdxComponents } from '../mdx/MdxComponent'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

const PostContent = ({ content }: { content: any }) => {
  console.log(123)
  return (
    <MDXRemote
      source={content}
      components={MdxComponents}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeSlug,
            [
              rehypePrettyCode,
              {
                theme: 'material-theme-palenight',
              },
              [
                rehypeAutolinkHeadings,
                {
                  properties: {
                    className: ['anchor'],
                  },
                },
              ],
            ],
          ],
        },
      }}
    />
  )
}

export default PostContent
