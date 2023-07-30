const db = require('../services/db.services.js');

const addLiqeurItems = async (items) => {
	try {
		return await Promise.all(items
			.filter((item) => { return item.name !== null })
			.map(async (item) => {
				const res = await db.createProduct(Object.values(item));
				console.log("Success! Inserted: ", res.rows);
				return item.name;
			})
		)
	} catch (err) {
		console.error("Failed to insert item: ", err);
	}
}

module.exports = {
	addLiqeurItems
};