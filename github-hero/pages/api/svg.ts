// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { readFileSync } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Card from '../../components/Card';

const cwd = process.cwd();

const fonts = readFileSync(`${cwd}/styles/fonts.css`).toString('utf-8');
const globals = readFileSync(`${cwd}/styles/globals.css`).toString('utf-8');

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  res.writeHead(200, { 'Content-Type': 'image/svg+xml' });
  res.write(
    ReactDOMServer.renderToStaticMarkup(
      React.createElement(Card, {
        fonts,
        globals,
        time: new Date().toISOString(),
        quote: Math.floor(Math.random() * 7),
        gradient: Math.floor(Math.random() * 7),
      })
    )
  );
  res.end();
}
