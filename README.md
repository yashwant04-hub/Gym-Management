# 🏋️‍♂️ Gym Management System

A responsive and modular **web-based application** for gym owners and members to digitally manage gym activities like **member registration**, **billing**, **notifications**, and **diet/supplement tracking**. Built with HTML, CSS, JS, and powered by **Firebase** for real-time backend.

---

## 📌 Problem Statement

Traditional gyms face these challenges:
- Loss of paper receipts
- Manual notifications for working/non-working days
- Difficulty in tracking billing and member records
- Poor visibility of reports and resource usage

**💡 Solution**: A centralized Firebase-powered app that digitizes all operations — from billing to communication — improving user convenience and admin efficiency.

---

## 🧩 Modules & Features

### 👨‍💼 Admin Panel
- 🔐 Login with Firebase Auth
- ➕ Add Member
- 📝 Update / Delete Member Info
- 💳 Create Digital Bills (auto-stored)
- 📦 Assign Monthly Fee Packages
- 🔔 Send Monthly Notifications
- 📑 Export Reports
- 🛍️ Supplement Store Management
- 🍱 Diet Plan Assignment

### 🙍‍♂️ Member Panel
- 🔐 Login with Firebase Auth
- 📄 View Personal Bills
- 🔔 View Notifications

### 👤 User Panel
- 🔐 Login with Firebase Auth
- 📋 View Own Details
- 🔍 Search Billing Records

---

## 🔥 Backend: Firebase

| Feature             | Used?        |
|---------------------|--------------|
| 🔐 Authentication   | ✅ Yes        |
| 📦 Realtime Database| ✅ Yes        |
| ☁️ Hosting          | Optional     |
| 🔐 Secure Rules     | Optional     |

### Firebase File:
Located at:  
```js
/admin/firebase-config.js
