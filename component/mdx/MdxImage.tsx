import { Box } from '@chakra-ui/react'
import Image, { type ImageProps } from 'next/image'

export const MDXImg = (props: ImageProps) => {
  const { height, alt, ...rest } = props

  const title = props.src.split('/').at(-1).split('.')[0] ?? ''

  const altProperty = alt || title

  return (
    <Box
      height={height}
      css={{
        position: 'relative',
        marginTop: '1em',
        marginBottom: '1em',
        borderRadius: 'lg',
        boxShadow: 'inset',
        borderWidth: '1.5px',
      }}
    >
      <Image {...rest} alt={altProperty} />
    </Box>
  )
}
