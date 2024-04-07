import { pool } from '../configs/db.config.js';
import { loadSqlQuery } from '../utils/filequery.js';

const getProductList = async () => {
	try {
		const query = loadSqlQuery('db.getproductlist.sql');
		return await pool.query(query);
	} catch (err) {
		console.error("Failed to query db\n", err);
		return "";
	}
}

const createProduct = async (item) => {
	try {
		const query = loadSqlQuery('db.createproduct.sql');
		return await pool.query(query, item);
	} catch (err) {
		console.error("Failed to insert into db\n", err);
		return "";
	}
}

const removeProduct = async (item) => {
	try {
		const query = loadSqlQuery('db.removeproduct.sql');
		const res = await pool.query(query, [item.productName]);
		console.log(res);
		return res;
	}
	catch (err) {
		console.error("Failed to remove from db\n", err);
		return "";
	}
}

const getInventoryList = async () => {
	try {
		const query = loadSqlQuery('db.getinventorylist.sql');
		return await pool.query(query);
	} catch (err) {
		console.error("Failed to query db\n", err);
		return "";
	}
}

const addProductToInventory = async (item) => {
	try {
		const query = loadSqlQuery('db.addinventory.sql');
		const res = await pool.query(query, item);
		return res;
	} catch (err) {
		console.error("Failed to insert into db\n", err);
		return "";
	}
}

const removeProductFromInventory = async () => {
	try {
		const query = loadSqlQuery('db.getinventorylist.sql');
		return await pool.query(query);
	} catch (err) {
		console.error("Failed to query db\n", err);
		return "";
	}
}

export { 
	createProduct, 
	removeProduct, 
	getProductList, 
	getInventoryList,
	addProductToInventory
};