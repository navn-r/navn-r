import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <Head>
        <title>GitHub Hero</title>
        <meta name='description' content='Generated SVG Hero for GitHub Profile' />
        <link rel='icon' href='https://navn.me/favicon.ico' />
      </Head>
      {`¯\\_(ツ)_/¯`}
    </div>
  );
};

export default Home;
