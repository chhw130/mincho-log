// import { Callout } from './Callout'
import { MDXComponents } from 'mdx/types'
import { Image } from './MdxImage'
import { MdxLink } from './MdxLink'
import { Heading } from '@chakra-ui/react'

export const MdxComponents: MDXComponents = {
  a: MdxLink as any,
  img: () => Image as any,
  h1: Heading,

  //   blockquote: Callout,
  //   Callout,
}
