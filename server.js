const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");

const app = express();
app.use(bodyParser.json());

app.post("/students", (req, res) => {
const { name, roll_no, class: studentClass } = req.body;

db.run(
"INSERT INTO students(name, roll_no, class) VALUES(?,?,?)",
[name, roll_no, studentClass],
function(err){
if(err) return res.send(err);
res.send({ id: this.lastID });
});
});

app.post("/marks", (req, res) => {
const { student_id, subject, score, max_score } = req.body;

db.run(
"INSERT INTO marks(student_id, subject, score, max_score) VALUES(?,?,?,?)",
[student_id, subject, score, max_score],
(err)=>{
if(err) return res.send(err);
res.send({ success:true });
});
});

app.get("/students/:id/result", (req,res)=>{
const id = req.params.id;

db.all(
"SELECT * FROM marks WHERE student_id = ?",
[id],
(err,rows)=>{
if(err) return res.send(err);

let total=0;
let max=0;

rows.forEach(r=>{
total+=r.score;
max+=r.max_score;
});

const percentage=(total/max)*100;
const status=percentage>=40?"PASS":"FAIL";

res.send({total,max,percentage,status});
});
});

app.get("/results/toppers",(req,res)=>{
db.all(`
SELECT s.name,SUM(m.score) as total
FROM students s
JOIN marks m ON s.id=m.student_id
GROUP BY s.id
ORDER BY total DESC
LIMIT 5
`,(err,rows)=>{
res.send(rows);
});
});

app.listen(3000,()=>console.log("Server running on port 3000"));
