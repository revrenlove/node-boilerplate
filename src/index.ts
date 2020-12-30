import 'module-alias/register';
import express from 'express';
import { greeterRouter } from '@controllers/';

const app = express();
const port = 8080; // default port to listen

app.use('/api', greeterRouter);

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});