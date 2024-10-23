import NextLink, { LinkProps } from 'next/link'
import { Link } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

export const MdxAnchor = ({ href, children }: PropsWithChildren<LinkProps>) => {
  return (
    <Link
      as={NextLink}
      href={href as string}
      css={{
        color: 'fg',
        textDecoration: 'underline',
        textUnderlineOffset: '3px',
        textDecorationThickness: '2px',
        textDecorationColor: 'border.emphasized',
        fontWeight: '500',
      }}
    >
      {children}
    </Link>
  )
}
