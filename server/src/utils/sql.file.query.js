import fs from 'fs';
import path from 'path';
import { __dirname } from './dirname.js';

const loadSqlQuery = (sql) => {
	const basedir = "../sql/";
	return fs.readFileSync(path.join(__dirname, basedir + sql)).toString();
};

export { loadSqlQuery };