import { createProduct } from '../services/db.services.js';

const checkProductType = (type) => {
	const typeList = ['tap', 'litretap', 'alcoholtap', 'bottles', 'liqeur', 'wine', 'misc']; //add to db later
	return typeList.includes(type);
}

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
				console.log("Success! Inserted: ", res.rows);
				return data.name;
			})
		)
	} catch (err) {
		console.error("Failed to insert item: ", err);
	}
}

const updateProductListItem = () => {
	console.log("to do");
}

const removeProductListItem = () => {
	console.log("to do");
}

export {
	checkProductType,
	getProductListItem,
	addProductListItem,
	updateProductListItem,
	removeProductListItem
};