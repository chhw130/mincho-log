import { META_DATA } from '@/const/const'
import { getSortedPostByDate } from '@/util'
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postList = await getSortedPostByDate()

  const postSiteMap: MetadataRoute.Sitemap = postList.map((post) => {
    return {
      url: `${META_DATA.url}posts/${post.category}/${post.fileName}`,
      lastModified: post.date,
      priority: 0.6,
    }
  })

  return [
    {
      url: 'https://www.mincho130.xyz/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://www.mincho130.xyz/profile',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...postSiteMap,
  ]
}
