import { parsePostDetail } from '@/util'
import React from 'react'

interface PageParams {
  params: {
    category: string
    title: string
  }
}

const page = async ({ params: { category, title } }: PageParams) => {
  const data = await parsePostDetail(category, title)

  return <div>{data}</div>
}

export default page
