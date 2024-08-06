const template = (appString) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>MeLi Front Test</title>
      <link rel="icon" href="/static/favicon.ico">
    </head>
    <body>
      <div id="root">${appString}</div>
      <script src="/static/bundle.js"></script>
    </body>
  </html>
`;

export default template;