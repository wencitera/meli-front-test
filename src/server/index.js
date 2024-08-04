import express from 'express';
import path from 'path';
import routes from './routes';

const PORT = 3000;
const app = express();


app.use('/static', express.static(path.join(__dirname, '..', '..', 'dist', 'static')));

app.get('*', routes);

app.listen(PORT, () => {
    console.log(`Server started: http://localhost:${PORT}`)
});
