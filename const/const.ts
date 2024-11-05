import type { Metadata } from 'next'
import path from 'path'

export const META_DATA: Metadata = {
  metadataBase: new URL('https://www.mincho130.xyz/'),
  title: 'Mincho-Log',
  description: 'Welcome to mincho-log',
  keywords: ['mincho', '527coco', 'chhw130', '민초', '기록'],
  openGraph: {
    title: 'Mincho-Log',
    description: 'Welcome to mincho-log',
    siteName: '민초로그',
    images: path.join(process.cwd(), '/images/mincho'),
    type: 'website',
  },

  icons: {
    icon: '/images/mincho-rabbit.png',
    apple: '/images/mincho-rabbit.png',
  },
}
