import Head from 'next/head';

interface iSmartHead {
  title: string;
  description: string;
}

export const SmartHead: React.FC<iSmartHead> = ({ title, description }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Head>
);
