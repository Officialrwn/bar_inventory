import { createProduct, removeProduct, getProductList } from '../services/db.services.js';
import { checkProductType } from '../utils/producttype.js'

const getProductListItem = async () => {
	try {
		const res = await getProductList();
		console.log("Success fetched productlist ", res.rows);
		return res.rows;
	} catch (err) {
	console.error("Failed to remove item: ", err);
	}
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

const removeProductListItem = async (item) => {
	try {
		const res = await removeProduct(item);
		console.log("Success! Removed: ", item.productName);
		return item.productName;
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