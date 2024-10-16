interface ImageProps {
  src: string
  alt: string
}

export const Image = ({ src, alt }: ImageProps) => {
  return (
    <>
      <Image src={src} alt={alt} />
      {alt !== '' && <span>{alt}</span>}
    </>
  )
}
