const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("students.db");

db.serialize(() => {

db.run(`
CREATE TABLE IF NOT EXISTS students(
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT,
roll_no TEXT,
class TEXT
)
`);

db.run(`
CREATE TABLE IF NOT EXISTS marks(
id INTEGER PRIMARY KEY AUTOINCREMENT,
student_id INTEGER,
subject TEXT,
score INTEGER,
max_score INTEGER
)
`);

});

module.exports = db;
