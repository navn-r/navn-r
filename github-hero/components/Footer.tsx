import { CSSProperties } from 'react';

interface Quote {
  author: string;
  content: string;
}

const quotes: Quote[] = [
  {
    author: 'Kevin J. Malone',
    content: 'Why waste time say lot word when few word do trick.',
  },
  {
    author: 'Dwight K. Schrute',
    content:
      "Before I do anything, I ask myself, 'Would an idiot do that?' And if the answer is yes, I do not do that thing.",
  },
  {
    author: 'Michael G. Scott',
    content:
      "Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way.",
  },
  {
    author: 'Andy Dwyer',
    content: 'Leslie, I typed your symptoms into the thing up here, and it says you could have network connectivity problems.',
  },
  {
    author: 'Tom Haverford',
    content:
      'Every song I download has to pass a series of rigorous tests to answer one simple question: is it a banger?',
  },
  {
    author: 'Ron Swanson',
    content:
      "There has never been a sadness that can't been cured by breakfast food.",
  },
  {
    author: 'Leslie Knope',
    content:
      "There's nothing we can't do if we work hard, never sleep, and shirk all other responsibilities our lives.",
  },
];

const styles: Record<string, CSSProperties> = {
  div: {
    marginTop: '2rem',
    borderTop: '0.5px solid rgba(201, 209, 217, 0.5)',
    maxWidth: '74ch',
  },
  p: {
    lineHeight: '1.5',
    padding: '0.5rem 0',
  },
};

const Footer: React.FC<{ quote: number }> = ({ quote }) => {
  const { author, content } = quotes[quote];

  return (
    <div style={styles.div}>
      <p style={{ ...styles.p, textAlign: 'center' }}>"{content}"</p>
      <p style={{ ...styles.p, float: 'right' }}>- {author}</p>
    </div>
  );
};

export default Footer;
