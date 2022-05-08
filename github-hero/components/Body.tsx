import { CSSProperties } from 'react';
import { Heart, MapleLeaf } from './Icons';

const styles: Record<string, CSSProperties> = {
  p: {
    lineHeight: '1.5',
    padding: '0.5rem 0',
    maxWidth: '73ch',
  },
  em: {
    fontFamily: 'Fira Code',
    fontSize: '14px',
    filter: 'opacity(0.5)',
    float: 'right',
  },
};

const Body: React.FC = () => {
  return (
    <div>
      <p style={styles.p}>
        Hello, world! My name is <strong>Navinn</strong>. I'm a Software
        Engineer and an Honours B.Sc. candidate for Computer Science, now in my
        third year at the University of Toronto, graduating in 2023.
      </p>

      <p style={styles.p}>
        Right now, I'm working as a Pod Leader running the MLH Fellowship, and
        an Undergraduate Teaching Assistant for Summer '22. I enjoy learning new
        tech, but more importantly building cool things with even cooler people.
      </p>

      <p style={styles.p}>
        Made with <Heart /> in <MapleLeaf />
        <em style={styles.em}>
          Auto-magically rendered at {new Date().toISOString()}
        </em>
      </p>
    </div>
  );
};

export default Body;
