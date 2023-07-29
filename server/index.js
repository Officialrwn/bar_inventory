const express = require('express');
const app = express();
const port = 4000;
const db = require('./src/services/db.services.tsx');
const cors = require('cors');

const insertProducts = async () => {
	const res = await db.create()
	console.log("Success");
	return res;
}

app.use(cors({
	origin: "http://localhost:3000"
}));

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.post('/api/add/products', (req, res) => {
	const data = insertProducts();
	if (!data)
		res.send("failed to insert!");
	else
		res.send(data);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})