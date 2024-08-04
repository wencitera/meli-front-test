const template = (appString) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>MeLi Front Test</title>
    </head>
    <body>
      <div id="root">${appString}</div>
      <script src="/bundle.js"></script>
    </body>
  </html>
`;

export default template;