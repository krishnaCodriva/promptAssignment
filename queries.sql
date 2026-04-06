-- Q1 total marks
SELECT 
s.id,
s.name,
SUM(m.score) as total_score,
SUM(m.max_score) as total_max
FROM students s
JOIN marks m ON s.id = m.student_id
GROUP BY s.id;

-- Q2 less than 40%
SELECT DISTINCT s.*
FROM students s
JOIN marks m ON s.id = m.student_id
WHERE (m.score * 100.0 / m.max_score) < 40;

-- Q3 class average
SELECT 
subject,
AVG(score * 100.0 / max_score) as avg_percentage
FROM marks
GROUP BY subject
ORDER BY avg_percentage ASC;
