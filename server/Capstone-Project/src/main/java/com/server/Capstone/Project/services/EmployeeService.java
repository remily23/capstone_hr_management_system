package com.server.Capstone.Project.services;


import com.server.Capstone.Project.models.Employee;
import com.server.Capstone.Project.respositories.EmployeeRepository;
import com.server.Capstone.Project.respositories.PositionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {


    @Autowired
    EmployeeRepository employeeRepository;

    @Autowired
    PositionRepository positionRepository;


    public List<Employee> getEmployees() {
        return employeeRepository.findAll();
    }

    public Employee addEmployee( Employee employee) {
        employeeRepository.save(employee);
        return employee;
    }
}
