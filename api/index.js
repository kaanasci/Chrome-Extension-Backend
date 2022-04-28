import express from 'express';
import WordController from './private/controllers/WordController';

const app = express();

const port = 3000;

app.get('/words', WordController.all);

app.listen(port, () => {
	console.log('App is now running at port ', port);
});