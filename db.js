const path = require("path");
const sqlite3 = require('sqlite3').verbose();


const dbPath = path.join(process.cwd(), "api/dua_main.sqlite");

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error connecting to SQLite database:', err.message);
    } else {
        console.log('Connected to SQLite database');
    }
});

module.exports = db;
