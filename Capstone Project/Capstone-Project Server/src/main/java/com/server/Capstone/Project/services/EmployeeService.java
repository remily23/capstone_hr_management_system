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
                employeeDTO.getProRata(),
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
        if (updateUserDTO.getFirstName() != null) {
            employee.setFirstName(updateUserDTO.getFirstName());
        }
        if (updateUserDTO.getLastName() != null) {
            employee.setLastName(updateUserDTO.getLastName());
        }
        if (updateUserDTO.getEmail() != null) {
            employee.setEmail(updateUserDTO.getEmail());
        }
        if (updateUserDTO.getDateOfBirth() != null) {
            employee.setDateOfBirth(updateUserDTO.getDateOfBirth());
        }
        if (updateUserDTO.getAddress() != null) {
            employee.setAddress(updateUserDTO.getAddress());
        }
        if (updateUserDTO.getPhoneNumber() != null) {
            employee.setPhoneNumber(updateUserDTO.getPhoneNumber());
        }
        if (updateUserDTO.getProRata() != 0) {
            employee.setProRata(updateUserDTO.getProRata());
        }

        if (updateUserDTO.getSalary() != 0) {
            employee.setSalary(updateUserDTO.getSalary());
        }

        employeeRepository.save(employee);
        return employee;
    }

    public Long deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
        return id;
    }
}
