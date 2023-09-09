import { CSSProperties } from 'react';

const titles = [
  'howdy!',
  "what's up!",
  "what's poppin!",
  "what's good!",
  "what's cookin!",
  "what's shakin bacon!",
  "what's crackalackin!",
];

const Logo = () => (
  <svg
    version='1.0'
    xmlns='http://www.w3.org/2000/svg'
    width='30px'
    className='logo'
    height='30px'
    viewBox='0 0 487.000000 509.000000'
    preserveAspectRatio='xMidYMid meet'
    style={{ animation: 'icon-purple 3000ms ease-in-out infinite' }}
  >
    <g
      transform='translate(0.000000,509.000000) scale(0.100000,-0.100000)'
      fill='#c9d1d9'
      stroke='none'
    >
      <path d='M2090 5066 c0 -2 73 -60 163 -127 205 -156 371 -319 415 -408 43 -87 45 -170 5 -207 -38 -35 -105 -52 -298 -75 -204 -24 -324 -42 -453 -70 -282 -61 -603 -208 -838 -385 -521 -392 -853 -990 -949 -1710 -16 -119 -20 -308 -7 -302 5 2 43 44 86 95 71 85 163 165 227 199 24 12 30 25 44 91 41 194 70 306 106 408 215 627 694 1076 1279 1201 121 26 430 26 550 0 241 -52 462 -175 625 -347 122 -129 198 -261 252 -439 25 -81 27 -98 31 -367 l4 -283 45 -39 c24 -22 68 -47 96 -57 29 -9 84 -31 124 -50 97 -46 117 -78 111 -177 -15 -206 -177 -416 -413 -534 -158 -79 -315 -115 -505 -115 -443 0 -835 234 -1024 613 -56 111 -85 204 -131 418 -19 90 -41 174 -50 187 -69 106 -258 -86 -351 -358 -36 -106 -54 -242 -54 -413 0 -172 18 -305 60 -455 68 -239 193 -502 313 -659 110 -144 554 -398 883 -506 212 -70 571 -141 674 -133 l45 3 -160 119 c-273 204 -405 353 -405 459 0 99 59 132 385 216 127 33 278 76 337 96 377 127 662 317 930 619 259 292 424 668 460 1047 27 292 -39 523 -198 689 -90 94 -169 140 -240 140 -66 0 -96 -20 -190 -129 -78 -90 -106 -107 -119 -73 -3 9 -15 91 -26 181 -36 306 -90 494 -216 751 -69 142 -82 161 -149 227 -265 258 -706 492 -1127 599 -160 40 -347 73 347 60z' />
      <path d='M2180 2867 c-128 -85 -73 -297 77 -297 96 0 163 60 171 153 4 60 -20 106 -77 144 -47 32 -125 32 -171 0z' />
      <path d='M2700 2828 c-50 -35 -72 -82 -68 -149 7 -95 66 -149 165 -149 95 0 159 74 151 175 -8 92 -68 145 -166 145 -34 0 -59 -7 -82 -22z' />
    </g>
  </svg>
);

const Cross = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 320 512'
    className='icon'
    width='15px'
    height='15px'
    style={{ margin: '0 0.25rem', filter: 'opacity(0.5)' }}
  >
    <path
      fill='currentColor'
      d='M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z'
    ></path>
  </svg>
);

const GitHub = () => (
  <svg
    className='logo'
    height='30px'
    width='30px'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 496 512'
    style={{ animation: 'icon-purple 3000ms ease-in-out infinite' }}
  >
    <path
      fill='currentColor'
      d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
    />
  </svg>
);

const styles: Record<string, CSSProperties> = {
  header: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, max-content) auto',
    alignItems: 'center',
    height: '50px',
    marginBottom: '0.5rem',
  },
  divider: {
    fontFamily: 'sans-serif',
    margin: '0 0.75rem',
    backgroundColor: '#c9d1d9',
    filter: 'opacity(0.5)',
    height: 'calc(100% - 0.5rem)',
    width: '1px',
  },
  title: {
    fontFamily: 'lostar',
    fontSize: '2rem',
    color: 'transparent',
    backgroundImage: 'linear-gradient( 109.6deg, #e34c26 11.2%, #f90 75.1% )',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    animation: 'gradient 3000ms ease-in-out infinite',
    backgroundSize: '150%',
  },
};

const Header: React.FC<{ title: number }> = ({ title }) => {
  return (
    <div style={styles.header}>
      <Logo />
      <Cross />
      <GitHub />
      <div style={styles.divider}></div>
      <h1 style={styles.title}>Yoo! {titles[title]}</h1>
    </div>
  );
};

export default Header;
