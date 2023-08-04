import { pool } from '../configs/db.config.js';
import { loadSqlQuery } from '../utils/sql.file.query.js';

const createProduct = async (item) => {
	try {
		const query = loadSqlQuery('db.createproduct.sql');
		return await pool.query(query, item);
	} catch (err) {
		console.error("Failed to insert into db\n", err);
		return "";
	}
}

export { createProduct };