const express = require('express');
const routes = require('./router/routes');

const PORT = 3000;
const app = express();

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server started: http://localhost:${PORT}`)
});
