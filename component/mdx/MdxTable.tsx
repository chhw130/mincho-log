import { Table as ChakraTable } from '@chakra-ui/react'

export const MdxTable = (props: ChakraTable.RootProps) => {
  return (
    <ChakraTable.Root
      native
      size="sm"
      variant="line"
      {...props}
      css={{
        marginTop: '2em',
        marginBottom: '2em',
      }}
    />
  )
}
