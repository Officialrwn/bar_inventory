import express from 'express';
import { checkProductType, addProductListItem, removeProductListItem } from '../../controllers/product.controller.js';

const app = express();

app.post('/api/products/add', async (req, res) => {
	if (!req.body || !checkProductType(req.query.type)) {
		res.sendStatus(500);
	} else {
		const data = await addProductListItem(req.body, req.query.type);
		console.log("DATA", data);
		res.sendStatus(200);
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