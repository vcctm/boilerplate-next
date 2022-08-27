import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet='utf-8' />
        <link rel='icon' href='/boilerplate-ico.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content='Boilerplate By Victor Miranda for ReactJs websites'
        />
        <link rel='apple-touch-icon' href='boilerplate-ico.png' />
        <title>Boilerplate by Victor Miranda</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
