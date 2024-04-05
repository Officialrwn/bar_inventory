import { createProduct, removeProduct } from '../services/db.services.js';
import { checkProductType } from '../utils/producttype.js'

const getProductListItem = () => {
	console.log("to do");
}

const addProductListItem = async (items, type) => {
	try {
		return await Promise.all(items
			.filter((item) => { return item.name !== null })
			.map(async (item) => {
				const data = { ...item, productType: type };
				const res = await createProduct(Object.values(data));
				console.log("Success! Inserted/Updated: ", res.rows);
				return data.name;
			})
		)
	} catch (err) {
		console.error("Failed to insert/update item: ", err);
	}
}

const removeProductListItem = async (productName) => {
	try {
				const res = await removeProduct(productName);
				console.log("Success! Removed: ", res.rows);
				return productName;
	} catch (err) {
		console.error("Failed to remove item: ", err);
	}
}

export {
	checkProductType,
	getProductListItem,
	addProductListItem,
	removeProductListItem
};