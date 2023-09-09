import type { NextPage } from 'next';
import Head from 'next/head';
import Body from '../components/Body';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home: NextPage<{ time: string; quote: number; title: number }> = ({
  time,
  quote,
  title,
}) => {
  return (
    <div style={{ padding: '1rem' }}>
      <Head>
        <title>GitHub Hero</title>
        <meta
          name='description'
          content='Generated SVG Hero for GitHub Profile'
        />
        <link rel='icon' href='https://navn.me/favicon.ico' />
      </Head>
      <div className='wrapper'>
        <Header title={title} />
        <Body time={time} />
        <Footer quote={quote} />
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      time: new Date().toISOString(),
      quote: Math.floor(Math.random() * 7),
      title: Math.floor(Math.random() * 7),
    },
  };
}

export default Home;
