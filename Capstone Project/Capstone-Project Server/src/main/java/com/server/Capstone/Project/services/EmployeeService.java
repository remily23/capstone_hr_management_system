package com.server.Capstone.Project.services;


import com.fasterxml.jackson.annotation.JsonView;
import com.server.Capstone.Project.models.Employee;
import com.server.Capstone.Project.models.EmployeeDTO;
import com.server.Capstone.Project.models.UpdateUserDTO;
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

    public Employee updateEmployee(Long id, UpdateUserDTO updateUserDTO) {
        Employee employee = employeeRepository.findById(id).get();
        employee.setFirstName(updateUserDTO.getFirstName());
        employee.setLastName(updateUserDTO.getLastName());
        employee.setEmail(updateUserDTO.getEmail());
        employee.setDateOfBirth(updateUserDTO.getDateOfBirth());
        employee.setAddress(updateUserDTO.getAddress());
        employee.setPhoneNumber(updateUserDTO.getPhoneNumber());
        employee.setProRota(updateUserDTO.getProRota());
        employee.setSalary(updateUserDTO.getSalary());

        employeeRepository.save(employee);
        return employee;
    }

}
