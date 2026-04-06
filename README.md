# Prompt Assignment

## Project Description

This is a simple backend project built using Node.js, Express and SQLite.
It allows storing students, adding marks and calculating results.

## Tech Stack

* Node.js
* Express.js
* SQLite
* Postman (for testing)

## Project Structure

```
server.js      -> Express server
db.js          -> Database connection
queries.sql    -> SQL schema
prompts.txt    -> AI prompts used
```

## Setup Instructions

1. Clone repository

```
git clone https://github.com/krishnaCodriva/promptAssignment.git
cd promptAssignment
```

2. Install dependencies

```
npm install
```

3. Run server

```
node server.js
```

Server runs on:

```
http://localhost:3000
```

## API Endpoints

### Add Student

POST /students

```
{
 "name": "Krishna",
 "roll_no": "101",
 "class": "10A"
}
```

### Get Students

GET /students

### Add Marks

POST /marks

```
{
 "student_id": 1,
 "subject": "Math",
 "score": 80,
 "max_score": 100
}
```

### Get Result

GET /students/:id/result

## Features

* Add students
* Add marks
* Calculate total
* Calculate percentage
* Pass/Fail logic

## Author

Krishna
