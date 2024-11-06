import React from 'react'

const Gtag = () => {
  return (
    <head>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA}', {
                  page_path: window.location.pathname,
                });
              `,
        }}
      />
    </head>
  )
}

export default Gtag
