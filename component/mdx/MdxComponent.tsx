// import { Callout } from './Callout'
import { MDXComponents } from 'mdx/types'
import { Image } from './MdxImage'
import { MdxLink } from './MdxLink'
import { Heading, Text } from '@chakra-ui/react'
import MdxParagraph from './MdxParagraph'

export const MdxComponents: MDXComponents = {
  a: MdxLink as any,
  img: () => Image as any,
  h1: Heading,
  p: MdxParagraph,

  //   blockquote: Callout,
  //   Callout,
}
