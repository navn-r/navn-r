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
    content: 'I tried to make ramen in the coffee pot and I broke everything.',
  },
];

const styles: Record<string, CSSProperties> = {
  div: {
    marginTop: '2rem',
    borderTop: '0.5px solid rgba(201, 209, 217, 0.5)',
    maxWidth: '73ch',
  },
  p: {
    lineHeight: '1.5',
    padding: '0.5rem 0',
  },
};

const Footer: React.FC = () => {
  const { author, content } = quotes[Math.floor(Math.random() * 4)];

  return (
    <div style={styles.div}>
      <p style={{...styles.p, textAlign: 'center'}}>"{content}"</p>
      <p style={{...styles.p, float: 'right'}}>- {author}</p>
    </div>
  );
};

export default Footer;