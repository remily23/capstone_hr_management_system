package com.server.Capstone.Project.components;

import com.server.Capstone.Project.models.Employee;
import com.server.Capstone.Project.models.Position;
import com.server.Capstone.Project.respositories.EmployeeRepository;
import com.server.Capstone.Project.respositories.PositionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {
    @Autowired
    PositionRepository positionRepository;
    @Autowired
    EmployeeRepository employeeRepository;
    public DataLoader() {

    }
    @Override
    public void run(ApplicationArguments args) throws Exception {
        Employee employee1 = new Employee(
                "Aanis",
                "Nuur",
                "aanisn10@gmail.com",
                "aanis10",
                "2000-09-29",
                "aanisn10@gmail.com",
                "012345678910",
                7989,
                2000
        );

        Employee employee2 = new Employee(
                "tom",
                "hanks",
                "tomhanks@gmail.com",
                "tomhanks",
                "1956-07-09",
                "tomhanks@gmail.com",
                "109384374839",
                12,
                22
        );



        Position position = new Position(
                "HR department",
                "Manager",
                "admin");

        employeeRepository.save(employee1);
        employeeRepository.save(employee2);
        employee1.setPosition(position);
        employee2.setPosition(position);
//        position.addEmployee(employee1);
//        position.addEmployee(employee2);
        positionRepository.save(position);
    }


}