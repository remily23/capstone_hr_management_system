# Capstone Project - Group 4: RainforestRetail HR Management System

## 👥🎸 Developer Team 👥🎸 ##
- GitHub: [Aanis](https://github.com/AanisN10) 
- GitHub: [Emily](https://github.com/remily23)
- GitHub: [Gisele](https://github.com/giselec12) 
- GitHub: [Saima](https://github.com/saima2210) 
- GitHub: [Ryan](https://github.com/RyanNekadio)

## Table of Contents 📜
1. Introduction
2. Technologies & Libraries
   - 2.1. Server-side
   - 2.2. Client-side
3. Setup Instructions
   - 3.1. Server-side
   - 3.2 Client-side
4. Diagrams
    - 4.1 Component/Container
    - 4.2. UML
    - 4.3. ERD
    - 4.4. Wireframe
    - 4.5 Persona
5. System Functionality
    - 5.1. MVPs
    - 5.2. Extensions
6. API Routes

## 1. Introduction
Fostering Agile Talent Ecosystems! TBC

## 2. Technologies & Libraries

## 2.1. Server-side
- Java 17
- IntelliJ IDEA IDE CE
- Spring Boot
  - Spring Web
  - DevTools
  - PostgreSQL Driver
- Postman
- Postico
- GitHub
  
## 2.2. Client-side
- RainforestRetail HR Management System API (link to API folder TBA)
- Visual Studio Code
- JavaScript
- HTML
- CSS
- React
  - [Router DOM 6.21.2](https://www.npmjs.com/package/react-router-dom)
- GitHub


## 3. Setup Instructions 🛠️

## 3.1 Server Side Setup
1. Clone the API from the repo (link to API folder TBA)
2. Open the project in IntelliJ
3. Create a database called "hr_db"

## 3.2 Client Side Setup
1. Open the project in Visual Studio Code
2. Enter `npi i` in the terminal to install the node modules
3. Enter `npm install react-router-dom` in the terminal to install the React Router
4. Start running the app with `npm start` in the terminal

## 4. Diagrams 🎨
Component/Container, UML, ERD, Wireframe, Persona diagrams TBA

## 5. System Functionality
## 5.1. MVPs 🫡

-	[X] Add additional positions (roles). Each position will represent each job title/department employees can belong to. 
-	[] Create an admin Login page. This will be the first page introduced to the user. The main functionality of this page will be to allow the user to sign into the app. 
-	[] Admin Dashboard/Homepage. This is the main page of the app. This page will include navigation prompts to direct the user to the rest of the app. 
-	[] Add functionality to create an employee account, from the HR admin side. An email will be sent to the employee, prompting them to create a new password using the link provided. Once submitted, the password will then be stored in the database. 


## 5.2. Extensions 💪
- Admin Calendar page to view staff name (filter to find staff name), staff schedule by hour
- Create an employee Dashboard/HomePage
- Employee Calendar Page
- Monitor changes in assignments for drivers
- Payroll
- Remember me button
- Forgot me button
- FAQs
- Back the top feature

## 6. API Routes
|       Request  | Path |Description                          |
|:------------------------------:|:-------------|:-------------------------------------|
|           POST            | /newemployee          | Add a new employee                    |
|           GET            | /employees/{employeeId}         | Get employees by id                   |
|           GET            | /employees       | Get all employees                 |             
|           GET            | /positions/         | Display all employee positions, titles and access levels                   |   
|           PATCH            | /employees/{employeeId}          | Update a specific employee by id              |
|           DELETE            | /employees/{employeeId}         | Delete an employee by id                    |