import { ChakraBlockquote } from '@chakra-ui/react'

export const MdxBlockquote = (props: ChakraBlockquote) => {
  return (
    <ChakraBlockquote.Root
      {...props}
      css={{
        marginTop: '1.285em',
        marginBottom: '1.285em',
      }}
    />
  )
}
