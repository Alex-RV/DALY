import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link href="/favicon.ico" rel="shortcut icon"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
      <link rel="manifest" href="/favicons/site.webmanifest"/>
      <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5"/>
      <meta name="msapplication-TileColor" content="#da532c"/>
      <meta name="theme-color" content="#ffffff"/>
      <link rel="icon" type="image/x-icon" href="https://media.discordapp.net/attachments/1071575123531939941/1074041605213921330/C1EBFB85-BB38-43DC-826F-FBE33EA9DFB0.jpg"/>
     </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
