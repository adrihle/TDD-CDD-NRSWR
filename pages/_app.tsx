import Head from 'next/head'
import { AppProps } from 'next/app'

// realmente esto no es una pagina, es un container para la app, aqui se mete redux, material...
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Pokemon!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
