const db = require('../services/db.services.js');

const insertProducts = async () => {
	await db.create()
	console.log("Success");
}

module.exports = {
	insertProducts
};