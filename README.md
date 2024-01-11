# Capstone Project - RainforestRetail HR Management System

## MVPs for project

-	Create an admin Login page. This will be the first page introduced to the user. The main functionality of this page will be to allow the user to sign into the app. 
-	Admin Dashboard/Homepage. This is the main page of the app. This page will include navigation prompts to direct the user to the rest of the app. 
-	Add functionality to create an employee account, from the HR admin side. An email will be sent to the employee, prompting them to create a new password using the link provided. Once submitted, the password will then be stored in the database. 
-	Add additional positions (roles). Each position will represent each job title/department employees can belong to. 


## Extensions for project
- Admin Calendar page to view staff name (filter to find staff name), staff schedule by hour
- Create an employee Dashboard/HomePage
- Employee Calendar Page
- Monitor changes in assignments for drivers
- Payroll
- Remember me button
- Forgot me button
- FAQs
- Back the top feature

## ?. API Routes
|       Request  | Path |Description                          |
|:------------------------------:|:-------------|:-------------------------------------|
|           POST            | /newemployee          | Add a new employee                    |
|           GET            | /employees/{employeeId}         | Get employees by id                   |
|           GET            | /employees       | Get all employees                 |             
|           GET            | /positions/         | Display all employee positions, titles and access levels                   |   
|           PATCH            | /employees/{employeeId}          | Update a specific employee by id              |
|           DELETE            | /employees/{employeeId}         | Delete an employee by id                    |