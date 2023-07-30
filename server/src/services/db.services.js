const pool = require('../configs/db.config.js').pool;
const fs = require('fs');
const path = require('path');

const sqlQuery = (sql) => {
	const basedir = "../sql/";
	return fs.readFileSync(path.join(__dirname, basedir + sql)).toString();
};

const createProduct = async (item) => {
	try {
		const query = sqlQuery('db.createproduct.sql');
		return await pool.query(query, item);
	} catch (err) {
		console.error("Failed to insert into db\n", err);
		return "";
	}
}

module.exports = {
	createProduct,
}