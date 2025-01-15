'use client'

import { Card } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

interface PostTocProps {
  titleList: string[]
}

const PostToc = ({ titleList }: PropsWithChildren<PostTocProps>) => {
  return (
    <Card.Root pos={'sticky'} as={'aside'} w={'30%'} alignSelf={'flex-start'}>
      <Card.Header />
      <Card.Body>
        {titleList.map((el) => {
          const ref = el
            .toLocaleLowerCase() // 영어는 전부 소문자로 변경한다
            .replace(/[^\w\sㄱ-힣-]/g, ' ') // 한글과 알파벳, 숫자, 밑줄, -를 제외한 모든 문자를 찾아낸다
            .trimStart()
            .replaceAll(' ', '-') // 공백문자는 -로 변경한다
          return (
            <a href={`#${ref}`} key={el}>
              {el}
            </a>
          )
        })}
      </Card.Body>
      <Card.Footer />
    </Card.Root>
  )
}

export default PostToc
