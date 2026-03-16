# Student Well-Being & Academic Experience Survey

A full-stack survey application designed to collect and analyze student feedback about academic workload, stress levels, and overall semester experience.
This project demonstrates frontend form design, client-side validation, backend API development, and survey analytics visualization.
----------

## Features

* Multi-section survey form
* Client-side validation for required fields
* Progress bar showing survey completion
* Dynamic section navigation (Next / Continue buttons)
* Backend API using Node.js + Express
* Survey responses stored in a JSON database
* Confetti animation on submission
* Survey analytics dashboard using Chart.js

---

## Tech Stack

Frontend:
* HTML5
* CSS3
* Bootstrap 5
* JavaScript

Backend:
* Node.js
* Express.js

Data Storage:
* JSON file (`responses.json`)

Visualization:
* Chart.js
---

## Project Structure

```
survey_project
│
├── public
│   ├── welcome.html
│   ├── survey.html
│   ├── thankyou.html
│   ├── dashboard.html
│   ├── style.css
│   └── script.js
│
├── data
│   └── responses.json
│
├── server.js
├── package.json
└── README.md
```

---

## 📊 Dashboard

After submitting survey responses, analytics can be viewed in:

```
http://localhost:3000/dashboard.html
```

The dashboard visualizes:

* Attendance distribution
* Stress level statistics
* Total survey responses

---

## 🎯 Purpose

This project was built as part of a Web Technologies course project to demonstrate:

* Frontend form design
* Backend API development
* Data storage and retrieval
* Interactive data visualization

This project is for educational purposes.
