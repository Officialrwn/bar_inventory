import { getInventoryList, addProductToInventory } from '../services/db.services.js';

const getInventoryItems = async () => {
	try {
		const res = await getInventoryList();
		return res.rows;
	} catch (err) {
		console.error("Failed to get inventory list: ", err);
	}
}

const addInventoryItems = async (items) => {
	try {
		return await Promise.all(items
			.filter((item) => { return item.inventoryName !== null && item.productName !== null })
			.map(async (item) => {
				const res = await addProductToInventory(Object.values(item));
				console.log("Success! Inserted/Updated: ", res.rows);
				return res;
			})
		)
	} catch (err) {
		console.error("Failed to insert/update item: ", err);
	}
}

const removeInventoryItems = async (items) => {
	console.log("remove items");
}

export { 
	getInventoryItems,
	addInventoryItems,
	removeInventoryItems
};