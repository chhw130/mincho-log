import type { Metadata } from 'next'

export const META_DATA = {
  title: '민초로그',
  url: 'https://www.mincho130.xyz/',
  description:
    '안녕하세요! 같이 고민하는 모험을 좋아하는 개발자, 최현우입니다.',
  publisher: 'Mincho',
  applicationName: 'Mincho-log',
}

export const defaultMeatdata: Metadata = {
  metadataBase: new URL(META_DATA.url),
  title: META_DATA.title,
  description: META_DATA.description,
  keywords: ['mincho', '527coco', 'chhw130', '민초', '기록'],
  openGraph: {
    title: META_DATA.title,
    description: META_DATA.description,
    siteName: '민초로그',
    images: '/images/mincho.png',
    type: 'website',
  },
  publisher: META_DATA.publisher,
  applicationName: META_DATA.applicationName,

  icons: {
    icon: '/images/mincho-rabbit.png',
    apple: '/images/mincho-rabbit.png',
  },
}
