import { MDXImg } from './MdxImage'
import MdxParagraph from './MdxParagraph'
import { MdxLi, MdxOl, MdxUl } from './MdxList'
import { MdxH1, MdxH2, MdxH3, MdxH4 } from './MdxHeading'
import { MdxAnchor } from './MdxAnchor'
import { MdxCode, MdxPre } from './MdxPre'
import { MdxTable } from './MdxTable'
import { MdxBlockquote } from './MdxBlockquote'
import { MdxCallout } from './MdxCallout'

export const MdxComponents = {
  a: MdxAnchor,
  blockquote: MdxBlockquote,
  Img: MDXImg,
  p: MdxParagraph,
  ol: MdxOl,
  ul: MdxUl,
  li: MdxLi,
  h1: MdxH1,
  h2: MdxH2,
  h3: MdxH3,
  h4: MdxH4,
  pre: MdxPre,
  code: MdxCode,
  table: MdxTable,
  Callout: MdxCallout,
}
