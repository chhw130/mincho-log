import { Box, BoxProps } from '@chakra-ui/react'

export const MdxPre = (props: BoxProps) => {
  return (
    <Box
      as="pre"
      {...props}
      css={{
        backgroundColor: 'bg.muted',
        shadow: 'inset',
        marginTop: '1.6em',
        marginBottom: '1.6em',
        borderRadius: 'md',
        fontSize: '0.9em',
        paddingBlock: '2em',
        paddingInline: '2em',
        overflowX: 'auto',
        fontWeight: '400',
        '& code': {
          bg: 'transparent',
          fontSize: 'inherit',
          letterSpacing: 'inherit',
          borderWidth: 'inherit',
          padding: '0',
        },
      }}
    />
  )
}

export const MdxCode = (props: BoxProps) => {
  return (
    <Box
      as="code"
      {...props}
      css={{
        fontSize: '0.8em',
        letterSpacing: '-0.01em',
        borderRadius: 'md',
        borderWidth: '0.5px',
        bg: 'bg.muted',
        color: 'fg',
        padding: '0.1em 0.4em',
      }}
    />
  )
}
