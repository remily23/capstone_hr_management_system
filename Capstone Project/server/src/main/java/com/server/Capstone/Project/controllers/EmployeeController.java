package com.server.Capstone.Project.controllers;


import com.server.Capstone.Project.models.Employee;
import com.server.Capstone.Project.models.EmployeeDTO;
import com.server.Capstone.Project.models.UpdateUserDTO;
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

    @PutMapping (value = "/{id}")
    public ResponseEntity<Employee> updateEmployee(@RequestBody UpdateUserDTO updateUserDTO, @PathVariable Long id){
        return new ResponseEntity<>(employeeService.updateEmployee(id, updateUserDTO), HttpStatus.OK);
    }

    @DeleteMapping (value = "/{id}")
    public ResponseEntity<Long> deleteEmployee(@PathVariable Long id) {
        return new ResponseEntity<>(employeeService.deleteEmployee(id), HttpStatus.OK);
    }

    public EmployeeController(EmployeeService employeeService) {

        this.employeeService = employeeService;
    }

    @PostMapping
    public ResponseEntity <Employee> createEmployeeWithPosition(@RequestBody EmployeeDTO employeeDTO) {
        return new ResponseEntity<>(employeeService.createEmployeeWithAPosition(employeeDTO), HttpStatus.OK);
    }








}
