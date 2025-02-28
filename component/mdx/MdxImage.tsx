import { Box } from '@chakra-ui/react'
import Image, { type ImageProps } from 'next/image'

export const MDXImg = (props: ImageProps) => {
  const { height, ...rest } = props
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
      <Image {...rest} alt={rest.alt} />
    </Box>
  )
}
