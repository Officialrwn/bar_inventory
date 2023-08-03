import express from 'express';
import cors from 'cors';
import { checkProductType, addProductListItem } from '../controllers/productlist.js';

const app = express();
const port = 4000;

app.use(cors({
	origin: "http://localhost:3000"
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.post('/api/add/products', async (req, res) => {
	if (!req.body || !checkProductType(req.query.type)) {
		res.sendStatus(500);
	} else {
		const data = await addProductListItem(req.body, req.query.type);
		console.log("DATA", data);
		res.sendStatus(200);
	}
})

const init = () => {
	app.listen(port, () => {
		console.log(`Listening on port ${port}`)
	})
}

export { init as serverInit }
