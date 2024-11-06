const Gtag = () => {
  console.log('id', process.env.NEXT_PUBLIC_GA)
  return (
    <head>
      <meta
        name="google-site-verification"
        content="C4gN5e7R12KXMbeA2793nc2l_RbtlBEJYn3ju2yyr1Q"
      />
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
