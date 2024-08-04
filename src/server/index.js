import express from 'express';
import path from 'path';
import React from 'react';
import {renderToString} from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from '../client/components/App';

const app = express();

app.use('/static', express.static(path.join(__dirname, '..', '..', 'dist', 'static')));

app.get('*', (req, res) => {
    const context = {};
    const appString = renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    );
  
    const html = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>React SSR App</title>
        </head>
        <body>
          <div id="root">${appString}</div>
          <script src="/bundle.js"></script>
        </body>
      </html>
    `;
  
    res.send(html);
});

app.listen(3000, () => {
    console.log('Server started: http://localhost:3000')
});
