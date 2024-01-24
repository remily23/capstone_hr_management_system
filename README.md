# Capstone Project - Group 4: HireHues HR Management System 

## 👥🎸 Developer Team 👥🎸 ##
- GitHub: [Aanis](https://github.com/AanisN10) 
- GitHub: [Emily](https://github.com/remily23)
- GitHub: [Gisele](https://github.com/giselec12) 
- GitHub: [Saima](https://github.com/saima2210) 
- GitHub: [Ryan](https://github.com/RyanNekadio)

## Table of Contents 📜
  - [1. Introduction](#1-introduction)
    - [1.1. Business Scenario](#11-business-scenario)
    - [1.2. Business Case](#12-business-case)
    - [1.3 Risk Register](#13-risk-register)
- [2. Technologies \& Libraries](#2-technologies--libraries)
  - [2.1. Server-side](#21-server-side)
  - [2.2. Client-side](#22-client-side)
- [3. Setup Instructions 🛠️](#3-setup-instructions-️)
  - [3.1 Server Side Setup](#31-server-side-setup)
  - [3.2 Client Side Setup](#32-client-side-setup)
- [4. Diagrams 🎨](#4-diagrams-)
  - [4.1. Component/Container Diagram](#41-componentcontainer-diagram)
  - [4.2. UML Diagram](#42-uml-diagram)
  - [4.3. ER Diagram](#43-er-diagram)
  - [4.4 Persona Diagram](#44-persona-diagram)
  - [4.5. Wireframe Diagram](#45-wireframe-diagram)
- [5. System Functionality](#5-system-functionality)
  - [5.1. MVPs 🫡](#51-mvps-)
  - [5.2. Extensions 💪](#52-extensions-)
- [6. API Routes](#6-api-routes)

## 1. Introduction
The best HR management tool fostering Agile talent Ecosystems! 

## 1.1. Business Scenario
RainforestRetail currently manage employee information with a hard-copy paper record system at head office. RainforestRetail are experiencing challenges keeping employee records up to date. Maintaining these records is becoming a time-consuming and error-prone process.

With the digitisation of all existing systems due to the recent business expansion, the development of an online HR records system will allow HR Admins to easily update records, improve security measures upgrading from a paper system, as well as aid RainforestRetail to comply with GDPR and other data protection regulations.

## 1.2. Business Case

Our **[Business Case](https://github.com/remily23/capstone_hr_management_system/blob/readme/Documentation/Business%20Case.pdf)** outlines the MVPs and Extensions we aimed to develop during this project.

Further, it contains a history of RainforestRetail's current paper based system, along with the limitations of attempting to implement a digital HR management application, as well as the approach required. 

The benefits of this project are also stated.

## 1.3 Risk Register

Our **[Risk Register](https://github.com/remily23/capstone_hr_management_system/blob/readme/Documentation/Risk%20Register.pdf)** has carefully considered the range of risks that developing this application brings.

The developer team evaluated what impact these risks could have on users, the probability of these occurring, and prioritised these, implementing plans to mitigate the outlined risks.

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
- RainforestRetail HR Management System API
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
1. Clone the API from the repo
2. Open the project in IntelliJ
3. Create a database called "hr_db"

## 3.2 Client Side Setup
1. Open the project in Visual Studio Code
2. Enter `npi i` in the terminal to install the node modules and dependencies associated with Material UI
3. Start running the app with `npm start` in the terminal

## 4. Diagrams 🎨

## 4.1. Component/Container Diagram
![Component/Container Diagram](https://github.com/remily23/capstone_hr_management_system/blob/readme/Diagrams/Component:Container%20Diagram.png?raw=true)

## 4.2. UML Diagram
![UM Diagram](https://github.com/remily23/capstone_hr_management_system/blob/readme/Diagrams/UML%20Diagram.png?raw=true)

## 4.3. ER Diagram
![ER Diagram](https://github.com/remily23/capstone_hr_management_system/blob/readme/Diagrams/ER%20Diagram.png?raw=true)

## 4.4 Persona Diagram
![Persona Diagram](https://github.com/remily23/capstone_hr_management_system/blob/readme/Diagrams/Persona%20Diagram.png?raw=true)

## 4.5. Wireframe Diagram
![Wireframe Diagram](https://github.com/remily23/capstone_hr_management_system/blob/readme/Diagrams/Wireframe%20Diagram.png?raw=true)

## 5. System Functionality

## 5.1. MVPs 🫡

-	[X] **Create an admin Login page.** This will be the first page introduced to the user. The main functionality of this page will be to allow the user to sign into the app.
-	[X] **Admin Dashboard.** This is the main page of the app. This page will include navigation prompts to direct the user to the rest of the app.
-	[X] **Admins to create an employee account,** from the HR admin side.

## 5.2. Extensions 💪
- [X] **Admins can delete user accounts.** To keep records system secure and up to date.
- [X] **User greeting.** The user will be greeted on the dashboard by their name with a time dependent message; good morning, afternoon or evening.
- [X] **Implement Material UI** for improved UX.
- [X] **Add dynamic table on the dashboard to display all users.** Users will be able to view and filter results.

## 6. API Routes
|       Request  | Path |Description                          |
|:------------------------------:|:-------------|:-------------------------------------|
|           GET            | /dashboard         | Gets the user dashboard for the logged in user                   |
|           GET            | /profile         | Gets the user profile for the logged in user                   |
|           PUT            | /profile/updateDetails         | Updates the user profile for the user logged in         |
|           POST            | /newaccount          | Adds a new employee                    |
|           DELETE            | /deleteaccount         | Deletes an employee account         |
