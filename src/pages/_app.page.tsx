import { AppProps } from 'next/app';
import { SmartHead } from 'components';
import { ReduxProvider } from 'store';
import '../styles/reset.scss';

const seoTexts = {
  title: 'Pokemon page!',
  description: 'Awesome pokemon site for discover every fucking toon',
};

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <main>
    <ReduxProvider>
      <SmartHead title={seoTexts.title} description={seoTexts.description} />
      <Component {...pageProps} />
    </ReduxProvider>
  </main>
);

export default App;
