import express from 'express';
import { getInventoryItems, addInventoryItems, removeInventoryItems } from '../../controllers/inventory.controller.js';

const app = express();

app.get('/api/inventory', async (req, res) => {
		const data = await getInventoryItems();
		console.log("DATA", data);
		res.status(200).json(data);
})

app.post('/api/inventory/add', async (req, res) => {
	if (!req.body) {
		res.sendStatus(500);
	} else {
		const data = await addInventoryItems(req.body);
		console.log("DATA", data);
		const response = {
			"Status": "Success",
			"Operation": "Insert/Update product",
			"Data": data.rows
		}
		res.status(200).json(response);
	}
})

app.post('/api/inventory/update', async (req, res) => {
	if (!req.body) {
		res.sendStatus(500);
	} else {
		const data = await updateInventoryItems(req.body);
		console.log("DATA", data);
		const response = {
			"Status": "Success",
			"Operation": "Update product",
			"Data": data.rows
		}
		res.status(200).json(response);
	}
})

app.post('/api/inventory/remove', async (req, res) => {
	if (!req.body) {
		res.sendStatus(500);
	} else {
		const data = await removeInventoryItems(req.body);
		// console.log("DATA", data);
		const response = {
			"Status": "Success",
			"Operation": "Removed product",
			"Data": req.body.inventoryName + " has been removed"
		}
		if (data.rowCount > 0) {
			res.status(200).json(response);
		} else {
			res.status(500).json({
				"Status": "Failed",
				"Operation": "Remove product",
				"Message": req.body.inventoryName + " not found"
			});
		}
	}
})

export { app as inventoryApiRoutes };