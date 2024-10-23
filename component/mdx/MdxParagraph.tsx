import { Text } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

const MdxParagraph = ({ children }: PropsWithChildren) => {
  return (
    <Text
      as={'p'}
      css={{
        color: 'fg.muted',
        lineHeight: '1.75',
        marginTop: '1em',
        marginBottom: '1em',
        _first: { marginTop: '0' },
        _last: { marginBottom: '0' },
        '& + .example-tabs': { marginTop: '2em' },
      }}
    >
      {children}
    </Text>
  )
}

export default MdxParagraph
