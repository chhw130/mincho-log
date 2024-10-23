import { Table, TableProps } from '@chakra-ui/react'

export const MdxTable = (props: TableProps) => {
  return (
    <Table
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
