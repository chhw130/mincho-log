import { Box } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

export const MdxOl = ({ children }: PropsWithChildren) => {
  return (
    <Box
      as="ol"
      css={{
        marginTop: '1em',
        marginBottom: '1em',
        paddingInlineStart: '1.5em',
        '& > li': {
          paddingInlineStart: '0.4em',
          listStyleType: 'decimal',
          '&::marker': {
            color: 'fg.subtle/50',
          },
        },
        '& ol, & ul': {
          marginTop: '0.5em',
          marginBottom: '0.5em',
        },
      }}
    >
      {children}
    </Box>
  )
}

export const MdxUl = ({ children }: PropsWithChildren) => {
  return (
    <Box
      as="ul"
      css={{
        marginTop: '1em',
        marginBottom: '1em',
        paddingInlineStart: '1.5em',
        '& > li': {
          paddingInlineStart: '0.4em',
          listStyleType: 'disc',
          '&::marker': {
            color: 'fg.subtle/50',
          },
        },
        '& ol, & ul': {
          marginTop: '0.5em',
          marginBottom: '0.5em',
        },
      }}
    >
      {children}
    </Box>
  )
}

export const MdxLi = ({ children }: PropsWithChildren) => {
  return (
    <Box as="li" css={{ marginY: '0.8em' }}>
      {children}
    </Box>
  )
}
