import mysql2 from 'mysql2/promise';

const db = mysql2.createPool({
host: 'localhost',
user: 'root',
database: 'clinica',
password: 'admin',
waitForConnections: true
});

export default db;
