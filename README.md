# Capstone Project - Group 4: HireHues HR Management System 

## 👥🎸 Developer Team 👥🎸 ##
- GitHub: [Aanis](https://github.com/AanisN10) 
- GitHub: [Emily](https://github.com/remily23)
- GitHub: [Gisele](https://github.com/giselec12) 
- GitHub: [Saima](https://github.com/saima2210) 
- GitHub: [Ryan](https://github.com/RyanNekadio)

## Table of Contents 📜 - ***section links TBA
1. Introduction 
   - 1.1. Business Scenario
   - 1.2 Business Case
   - 1.3 Risk Register
2. Technologies & Libraries
   - 2.1. Server-side
   - 2.2. Client-side
3. Setup Instructions
   - 3.1. Server-side
   - 3.2 Client-side
4. Diagrams
    - 4.1 Component/Container
    - 4.2. UML
    - 4.3. ER
    - 4.4. Persona
    - 4.5 Wireframe
5. System Functionality
    - 5.1. MVPs
    - 5.2. Extensions
6. API Routes

## 1. Introduction
The best HR management tool fostering Agile talent Ecosystems! 

## 1.1. Business Scenario
RainforestRetail currently manage employee information with a hard-copy paper record system at head office. RainforestRetail are experiencing challenges keeping employee records up to date. Maintaining these records is becoming a time-consuming and error-prone process.

With the digitisation of all existing systems due to the recent business expansion, the development of an online HR records system will allow HR Admins to easily update records, improve security measures upgrading from a paper system, as well as aid RainforestRetail to comply with GDPR and other data protection regulations.

## 1.1. Business Case

**[Business Case]** link + screenshot TBA

## 1.2 Risk Register

**[Risk Register]** link + screenshot TBA

## 2. Technologies & Libraries

## 2.1. Server-side ***to finalise
- Java 17
- IntelliJ IDEA IDE CE
- Spring Boot
  - Spring Web
  - DevTools
  - PostgreSQL Driver
- Postman
- Postico
- GitHub
  
## 2.2. Client-side ***to finalise
- RainforestRetail HR Management System API ***(link to API folder TBA)
- Visual Studio Code
- JavaScript
- HTML
- CSS
- React
  - [Router DOM 6.21.2](https://www.npmjs.com/package/react-router-dom)
- Material UI
- GitHub

## 3. Setup Instructions 🛠️

## 3.1 Server Side Setup
1. Clone the API from the repo (link to API folder TBA)
2. Open the project in IntelliJ
3. Create a database called "hr_db"

## 3.2 Client Side Setup ***to add copy function with ```
1. Open the project in Visual Studio Code
2. Enter `npi i` in the terminal to install the node modules
3. Enter `npm install react-router-dom` in the terminal to install the React Router
4. Enter `npm install @mui/material @emotion/react @emotion/styled` to install the dependencies associated with the Material UI library
5. Enter `npm install @mui/x-data-grid` for Material UI dependencies associated with the dashboard table
6. Start running the app with `npm start` in the terminal


## 4. Diagrams 🎨

## 4.1. Component/Container Diagram

## 4.2. UML Diagram

## 4.3. ER Diagram
![ER Diagram](main url)

## 4.4 Persona Diagram

## 4.5. Wireframe Diagram

## 5. System Functionality
## 5.1. MVPs 🫡

-	[X] **Create an admin Login page.** This will be the first page introduced to the user. The main functionality of this page will be to allow the user to sign into the app.
-	[X] **Admin Dashboard.** This is the main page of the app. This page will include navigation prompts to direct the user to the rest of the app.
-	[X] **Admins to create an employee account,** from the HR admin side.
- [X] **User greeting.** The user will be greeted on the dashboard by their name with a time dependent message; good morning, afternoon or evening. 


## 5.2. Extensions 💪 ***to be finalised
- [] **Add additional positions (roles).** Each position will represent each job title employees can belong to. 
- [] **Remember me button.** This will allow the app to retain the email responsible for each user's log in, allowing for a smoother sign in experience.
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