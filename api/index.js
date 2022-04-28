import express from 'express';
import WordController from './private/controllers/WordController';
import cors from 'cors';

const app = express();

const port = 3000;

app.use(cors());

app.get('/words', WordController.all);

app.listen(port, () => {
	console.log('App is now running at port ', port);
});