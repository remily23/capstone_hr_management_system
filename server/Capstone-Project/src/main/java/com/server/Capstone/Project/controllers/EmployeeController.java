package com.server.Capstone.Project.controllers;


import com.server.Capstone.Project.models.Employee;
import com.server.Capstone.Project.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("employees")
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

    @GetMapping
    public ResponseEntity <List<Employee>> getAllEmployees() {
        return new ResponseEntity<>(employeeService.getEmployees(), HttpStatus.OK);
    }


    @PostMapping
    public  ResponseEntity <Employee> createEmployee(
            @RequestBody Employee employee)
             {
        return new ResponseEntity<>(employeeService.addEmployee(employee), HttpStatus.CREATED);
    }
}
