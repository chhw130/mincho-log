import { Box } from '@chakra-ui/react'
import Image from 'next/image'

interface ImageProps {
  src: string
  alt: string
}

export const MDXImg = ({ src, alt }: ImageProps) => {
  return (
    <Box
      pos={'relative'}
      w={'100%'}
      aspectRatio={'16 / 9'}
      textAlign={'center'}
    >
      <Image
        src={src}
        alt={alt}
        fill
        quality={100}
        style={{
          objectFit: 'cover',
        }}
      />
      {alt !== '' && <span>{alt}</span>}
    </Box>
  )
}
