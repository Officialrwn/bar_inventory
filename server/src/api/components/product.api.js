import express from 'express';
import { checkProductType, getProductListItem, addProductListItem, removeProductListItem } from '../../controllers/product.controller.js';

const app = express();

app.get('/api/products', async (req, res) => {
		const data = await getProductListItem();
		console.log("DATA", data);
		res.sendStatus(200).json({"TEST!!!!": data});
})

app.post('/api/products/add', async (req, res) => {
	if (!req.body || !checkProductType(req.query.type)) {
		res.sendStatus(500);
	} else {
		const data = await addProductListItem(req.body, req.query.type);
		console.log("DATA", data);
		res.sendStatus(200).json(data);
	}
})

app.post('/api/products/remove', async (req, res) => {
	if (!req.body || !checkProductType(req.query.type)) {
		res.sendStatus(500);
	} else {
		const data = await removeProductListItem(req.body, req.query.type);
		console.log("DATA", data);
		res.sendStatus(200);
	}
})

export { app as productApiRoutes };