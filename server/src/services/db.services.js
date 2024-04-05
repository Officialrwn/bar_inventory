import { pool } from '../configs/db.config.js';
import { loadSqlQuery } from '../utils/filequery.js';

const createProduct = async (item) => {
	try {
		const query = loadSqlQuery('db.createproduct.sql');
		return await pool.query(query, item);
	} catch (err) {
		console.error("Failed to insert into db\n", err);
		return "";
	}
}

const removeProduct = async (productName) => {
	try {
		const query = loadSqlQuery('db.removeproduct.sql');
		return	await pool.query(query, productName);
	}
	catch (err) {
		console.error("Failed to remove from db\n", err);
		return "";
	}
}

export { createProduct, removeProduct };