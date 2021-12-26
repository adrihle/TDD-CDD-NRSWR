import { AppProps } from 'next/app';
import { SmartHead } from 'components';

const seoTexts = {
  title: 'Pokemon page!',
  description: 'Awesome pokemon site for discover every fucking toon',
};

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <main>
    <SmartHead title={seoTexts.title} description={seoTexts.description} />
    <Component {...pageProps} />
  </main>
);

export default App;
