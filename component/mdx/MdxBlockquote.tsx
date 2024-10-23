import { Card, CardProps } from '@chakra-ui/react'

export const MdxBlockquote = (props: CardProps) => {
  return (
    <Card
      {...props}
      css={{
        borderLeft: '4px solid #4a5568',
        borderRadius: '4px',
        margin: '1em 0',
        padding: '0.5em 1em',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    />
  )
}
