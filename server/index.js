const products = require('./src/controllers/products');

const express = require('express');
const cors = require('cors');
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
	if (!req.body) {
		res.sendStatus(500);
	} else {
		const data = await products.addLiqeurItems(req.body);
		console.log("DATA", data);
		res.sendStatus(200);
	}
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})