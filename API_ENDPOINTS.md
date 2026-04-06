# API Endpoints Documentation

## Base URL

http://localhost:3000

---

## 1. Add Student

**Endpoint**
POST /students

**Request Body**

```json
{
  "name": "Krishna",
  "roll_no": "101",
  "class": "10A"
}
```

**Response**

```json
{
  "message": "Student added successfully"
}
```

---

## 2. Get All Students

**Endpoint**
GET /students

**Response**

```json
[
  {
    "id": 1,
    "name": "Krishna",
    "roll_no": "101",
    "class": "10A"
  }
]
```

---

## 3. Add Marks

**Endpoint**
POST /marks

**Request Body**

```json
{
  "student_id": 1,
  "subject": "Math",
  "score": 85,
  "max_score": 100
}
```

**Response**

```json
{
  "message": "Marks added successfully"
}
```

---

## 4. Get Student Result

**Endpoint**
GET /students/:id/result

Example:
GET /students/1/result

**Response**

```json
{
  "student_id": 1,
  "total": 85,
  "max_total": 100,
  "percentage": 85,
  "status": "Pass"
}
```

---

## Pass/Fail Logic

* Percentage >= 40 → Pass
* Percentage < 40 → Fail
