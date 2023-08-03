import express from 'express';
import cors from 'cors';
import * as apiroutes from '../apiroutes/index.js';

const app = express();
const port = 4000;

app.use(cors({
	origin: "http://localhost:3000"
}));

app.use(express.json());

Object.keys(apiroutes)
	.map((route) => app.use(apiroutes[route]));

app.get('/', (req, res) => {
  res.send('Hello World!');
})

const init = () => {
	app.listen(port, () => {
		console.log(`Listening on port ${port}`)
	})
}

export { init as serverInit }
