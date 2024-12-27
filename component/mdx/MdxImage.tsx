import { Box } from '@chakra-ui/react'
import Image, { type ImageProps } from 'next/image'

export const MDXImg = (props: ImageProps) => {
  const { height, ...rest } = props
  return (
    <Box
      height={height}
      css={{
        position: 'relative',
      }}
    >
      {/* eslint-disable jsx-a11y/alt-text */}
      <Image {...rest} />
    </Box>
  )
}
