import { renderToString } from 'react-dom/server';
import React from 'react';
import { StaticRouter } from 'react-router-dom/server';
import App from '../client/components/App';
import template from './template';

const routes = (req, res) => {
  const context = {};
  const appString = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  const html = template(appString);
  res.send(html);
};

export default routes;