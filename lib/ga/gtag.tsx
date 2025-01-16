'use client'

import Script from 'next/script'

const GoogleAnalytics = () => {
  const GA_ID = process.env.NEXT_PUBLIC_GA

  return (
    <>
      <meta
        name="google-site-verification"
        content="C4gN5e7R12KXMbeA2793nc2l_RbtlBEJYn3ju2yyr1Q"
      />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  )
}

export default GoogleAnalytics
