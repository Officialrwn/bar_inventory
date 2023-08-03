import { pool } from '../configs/db.config.js';
import fs from 'fs';
import path from 'path';
import { __dirname } from '../utils/dirname.js';

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

export { createProduct };