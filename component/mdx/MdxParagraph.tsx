import { Text } from '@chakra-ui/react'
import React, { PropsWithChildren } from 'react'

const MdxParagraph = ({ children }: PropsWithChildren) => {
  return <Text as={'b'}>{children}</Text>
}

export default MdxParagraph
