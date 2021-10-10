import Head from 'next/head'
import { AppProps } from 'next/app'
import { Footer, Nav } from '../containers'
import '../styles/global.scss'
import { LangProvider } from '../contexts';

// realmente esto no es una pagina, es un container para la app, aqui se mete redux, material...
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>DOCTOR GO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LangProvider>
        <Nav />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </LangProvider>
    </>
  )
}

export default MyApp
