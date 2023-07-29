const pool = require('../configs/db.config.js').pool;
const fs = require('fs');
const path = require('path');

const sqlQuery = (sql) => {
	const basedir = "../sql/";
	return fs.readFileSync(path.join(__dirname, basedir + sql)).toString();
}

const create = async () => {
	const item = ['Test', 33, 1, 1, 1];
	try {
		const query = sqlQuery('db.insert.sql');
		const res = await pool.query(query, item);
		return res;
	} catch (err) {
		console.error("Failed to insert into db\n", err);
		return null;
	}
}

const cleanUp = async () => {
	try {
		const query = sqlQuery('db.cleanup.sql');
		const res = await pool.query(query);
		return res;
	} catch (err) {
		console.error("Failed to cleanup db\n", err);
	}
}

const getData = async () => {
	try {
		const query = sqlQuery('db.getdata.sql');
		const res = await pool.query(query);
		return res;
	} catch (err) {
		console.error("Failed to get data from db\n", err);
	}
}

module.exports = {
	create,
	getData
}