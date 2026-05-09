# supermarket-app

---

โปรเจกต์นี้เป็นระบบจัดการคลังสินค้าซูเปอร์มาร์เก็ต (CRUD System)
พัฒนาด้วย:

- Node.js
- Express.js
- MySQL (MAMP)
- EJS
- Bootstrap 5
- Multer
- MVC Architecture
- 
# โครงสร้างโปรเจกต์

```plaintext
supermarket-app/
│
├── controllers/
├── models/
├── routes/
├── views/
├── public/
│   └── uploads/
├── app.js
├── db.js
├── package.json
├── README.md
└── supermarket_db.sql
```

# วิธีติดตั้งโปรเจกต์

## 1. ดาวน์โหลดโปรเจกต์

ดาวน์โหลด ZIP หรือ Clone Repository

---

## 2. ติดตั้ง Node Modules

เปิด Terminal ในโฟลเดอร์โปรเจกต์ แล้วรัน:

```bash
npm install
```

---

## 3. เปิด MAMP

เปิดโปรแกรม MAMP แล้ว Start Servers

---

## 4. สร้างฐานข้อมูล

เข้า:

```plaintext
http://localhost/phpMyAdmin
```

Import ไฟล์:

```plaintext
supermarket_db.sql
```

---

## 5. ตั้งค่า db.js

ตัวอย่าง:

```javascript
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'supermarket_db',
    port: 3306
});

module.exports = connection;
```

---

## 6. รันโปรเจกต์

```bash
node app.js
```

---

## 7. เปิดเว็บไซต์

```plaintext
http://localhost:3000
```

---

# English

## Project Description

This project is a Supermarket Inventory Management System developed using:

- Node.js
- Express.js
- MySQL (MAMP)
- EJS
- Bootstrap 5
- Multer
- MVC Architecture
---

# Project Structure

```plaintext
supermarket-app/
│
├── controllers/
├── models/
├── routes/
├── views/
├── public/
│   └── uploads/
├── app.js
├── db.js
├── package.json
├── README.md
└── supermarket_db.sql
```

---

# Installation Guide

## 1. Download Project

Download ZIP file or Clone Repository.

---

## 2. Install Dependencies

Open Terminal in project folder and run:

```bash
npm install
```

---

## 3. Start MAMP

Open MAMP application and Start Servers.

---

## 4. Import Database

Open:

```plaintext
http://localhost/phpMyAdmin
```

Import:

```plaintext
supermarket_db.sql
```

---

## 5. Configure db.js

Example:

```javascript
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'supermarket_db',
    port: 3306
});

module.exports = connection;
```

---

## 6. Run Project

```bash
node app.js
```

---

## 7. Open Website

```plaintext
http://localhost:3000
```

---

# Author

Developed for Web Development Course
