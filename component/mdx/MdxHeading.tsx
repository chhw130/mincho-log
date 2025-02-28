import { Box } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

export const MdxH1 = ({ children }: PropsWithChildren) => {
  const id = children
    ?.toString()
    .toLocaleLowerCase()
    .replace(/[^\w\sㄱ-힣-]/g, ' ')
    .replaceAll(' ', '-')

  return (
    <Box
      as="h1"
      id={id}
      css={{
        color: 'fg',
        fontSize: '2em',
        letterSpacing: '-0.02em',
        marginTop: '2em',
        marginBottom: '0.8em',
        lineHeight: '1.2em',
        fontWeight: 'bold',
        scrollMarginTop: 'calc(var(--header-height) + 1.5em)',
      }}
    >
      {children}
    </Box>
  )
}

export const MdxH2 = ({ children }: PropsWithChildren) => {
  const id = children
    ?.toString()
    .toLocaleLowerCase()
    .replace(/[^\w\sㄱ-힣-]/g, ' ')
    .replaceAll(' ', '-')
  return (
    <Box
      as="h2"
      id={id}
      css={{
        color: 'fg',
        fontSize: '1.3em',
        letterSpacing: '-0.02em',
        marginTop: '1.8em',
        marginBottom: '0.8em',
        lineHeight: '1.4em',
        fontWeight: 'semibold',
        scrollMarginTop: 'calc(var(--header-height) + 1.5em)',
        '& code': { fontSize: '0.9em' },
        '& + *': { marginTop: '0' },
        '& a': { font: 'inherit!' },
      }}
    >
      {children}
    </Box>
  )
}

export const MdxH3 = ({ children }: PropsWithChildren) => {
  const id = children
    ?.toString()
    .toLocaleLowerCase()
    .replace(/[^\w\sㄱ-힣-]/g, ' ')
    .replaceAll(' ', '-')
  return (
    <Box
      as="h3"
      id={id}
      css={{
        color: 'fg',
        fontSize: '1.6em',
        letterSpacing: '-0.01em',
        marginTop: '2em',
        marginBottom: '0.4em',
        fontWeight: 'semibold',
        lineHeight: '1.5em',
        scrollMarginTop: 'calc(var(--header-height) + 1.5em)',
        '& code': { fontSize: '0.9em' },
        '& + *': { marginTop: '0' },
        '& a': { font: 'inherit!' },
      }}
    >
      {children}
    </Box>
  )
}

export const MdxH4 = ({ children }: PropsWithChildren) => {
  const id = children
    ?.toString()
    .toLocaleLowerCase()
    .replace(/[^\w\sㄱ-힣-]/g, ' ')
    .replaceAll(' ', '-')
  return (
    <Box
      as="h4"
      id={id}
      css={{
        color: 'fg',
        marginTop: '1.6em',
        marginBottom: '0.8em',
        letterSpacing: '-0.01em',
        fontWeight: 'semibold',
        lineHeight: '1.5em',
        scrollMarginTop: 'calc(var(--header-height) + 1.5em)',
        '& + *': { marginTop: '0' },
        '& a': { font: 'inherit!' },
      }}
    >
      {children}
    </Box>
  )
}
