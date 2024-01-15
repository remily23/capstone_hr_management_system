package com.server.Capstone.Project.services;


import com.server.Capstone.Project.models.Employee;
import com.server.Capstone.Project.models.EmployeeDTO;
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

    public Employee addEmployee(EmployeeDTO employeeDTO) {
        Employee employee = new Employee(
                employeeDTO.getFirstName(),
                employeeDTO.getLastName(),
                employeeDTO.getEmail(),
                employeeDTO.getPassword(),
                employeeDTO.getDateOfBirth(),
                employeeDTO.getAddress(),
                employeeDTO.getPhoneNumber(),
                employeeDTO.getProRota(),
                employeeDTO.getSalary()
        );
        employeeRepository.save(employee);
        return employee;
    }

    public Employee getEmployeeById(long id) {
        return employeeRepository.findById(id).get();
    }
}
