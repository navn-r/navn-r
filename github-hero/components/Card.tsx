import React from 'react';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

const Wrapper: React.FC<{ xmlns: string; children: React.ReactNode }> = ({
  children,
  ...rest
}) => (
  <div className='wrapper' {...rest}>
    {children}
  </div>
);

const Card: React.FC<{
  fonts: string;
  globals: string;
}> = ({ fonts, globals }) => {
  return (
    <svg
      fill='none'
      viewBox='0 0 800 425'
      width='800'
      height='425'
      xmlns='http://www.w3.org/2000/svg'
    >
      <defs>
        <style>{fonts}</style>
        <style>{globals}</style>
      </defs>
      <foreignObject width='100%' height='100%'>
        <Wrapper xmlns='http://www.w3.org/1999/xhtml'>
          <Header />
          <Body />
          <Footer />
        </Wrapper>
      </foreignObject>
    </svg>
  );
};

export default Card;
