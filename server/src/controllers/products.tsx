const db = require('../services/db.services.tsx');

const insertProducts = async () => {
	await db.create()
	console.log("Success");
}

module.exports = {
	insertProducts
};