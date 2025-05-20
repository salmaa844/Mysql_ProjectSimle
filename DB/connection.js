import mysql from 'mysql2/promise';
import 'dotenv/config';

const connection = await mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.BATABASE,
  password: process.env.PASSWORD
});

export default connection;
