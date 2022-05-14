import { CSSProperties } from 'react';

const Heart = () => (
  <svg
    height='15px'
    width='15px'
    aria-hidden='true'
    focusable='false'
    data-prefix='fas'
    data-icon='heart'
    role='img'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 512 512'
    className='svg-inline--fa fa-heart fa-w-16 fa-2x icon'
    style={{ animation: 'icon-orange 3000ms ease-in-out infinite' }}
  >
    <defs>
      <linearGradient id='icon-gradient' gradientTransform='rotate(69deg)'>
        <stop offset='50%' stopColor='rgba(238,9,121,1)' />
        <stop offset='85%' stopColor='rgba(255,106,0,1)' />
      </linearGradient>
    </defs>
    <path
      fill='url(#icon-gradient)'
      d='M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z'
    ></path>
  </svg>
);

const MapleLeaf = () => (
  <svg
    height='15px'
    width='15px'
    aria-hidden='true'
    focusable='false'
    data-prefix='fab'
    data-icon='canadian-maple-leaf'
    role='img'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 512 512'
    className='svg-inline--fa fa-canadian-maple-leaf icon fa-w-16 fa-2x'
    style={{ animation: 'icon-orange 3000ms ease-in-out infinite' }}
  >
    <path
      fill='currentColor'
      d='M383.8 351.7c2.5-2.5 105.2-92.4 105.2-92.4l-17.5-7.5c-10-4.9-7.4-11.5-5-17.4 2.4-7.6 20.1-67.3 20.1-67.3s-47.7 10-57.7 12.5c-7.5 2.4-10-2.5-12.5-7.5s-15-32.4-15-32.4-52.6 59.9-55.1 62.3c-10 7.5-20.1 0-17.6-10 0-10 27.6-129.6 27.6-129.6s-30.1 17.4-40.1 22.4c-7.5 5-12.6 5-17.6-5C293.5 72.3 255.9 0 255.9 0s-37.5 72.3-42.5 79.8c-5 10-10 10-17.6 5-10-5-40.1-22.4-40.1-22.4S183.3 182 183.3 192c2.5 10-7.5 17.5-17.6 10-2.5-2.5-55.1-62.3-55.1-62.3S98.1 167 95.6 172s-5 9.9-12.5 7.5C73 177 25.4 167 25.4 167s17.6 59.7 20.1 67.3c2.4 6 5 12.5-5 17.4L23 259.3s102.6 89.9 105.2 92.4c5.1 5 10 7.5 5.1 22.5-5.1 15-10.1 35.1-10.1 35.1s95.2-20.1 105.3-22.6c8.7-.9 18.3 2.5 18.3 12.5S241 512 241 512h30s-5.8-102.7-5.8-112.8 9.5-13.4 18.4-12.5c10 2.5 105.2 22.6 105.2 22.6s-5-20.1-10-35.1 0-17.5 5-22.5z'
    ></path>
  </svg>
);

const styles: Record<string, CSSProperties> = {
  p: {
    lineHeight: '1.5',
    padding: '0.5rem 0',
    maxWidth: '74ch',
    position: 'relative',
    zIndex: '1',
  },
  em: {
    fontFamily: 'Fira Code',
    fontSize: '14px',
    filter: 'opacity(0.5)',
    float: 'right',
  },
  strong: {
    backgroundImage:
      'linear-gradient( 109.6deg,  rgba(243,136,136,1) 11.2%, rgba(196,157,247,1) 75.1% )',
    backgroundSize: '50px 1px',
    backgroundRepeat: 'no-repeat',
    backgroundPositionY: 'bottom',
  },
};

const Body: React.FC<{ time: string }> = ({ time }) => {
  return (
    <div>
      <p style={styles.p}>
        Hello, world! My name is <strong style={styles.strong}>Navinn</strong>.
        I'm a Software Engineer and an Honours B.Sc. candidate for Computer
        Science, now in my third year at the University of Toronto, graduating
        in 2023.
      </p>

      <p style={styles.p}>
        Right now, I'm working as a Pod Leader running the MLH Fellowship, and
        an Undergraduate Teaching Assistant for Summer '22. I enjoy learning new
        tech, but more importantly building cool things with even cooler people.
      </p>

      <p style={styles.p}>
        Made with <Heart /> in <MapleLeaf />
        <em style={styles.em}>Auto-magically rendered at {time}</em>
      </p>
    </div>
  );
};

export default Body;
