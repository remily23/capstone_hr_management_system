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
        
        Employee gisele = new Employee(
                "Gisele",
                "A",
                "gisel@bnta.com",
                "123",
                "2000-04-04",
                "BN6 7TA",
                "456654321",
                16,
                46
        );


        Employee tom = new Employee(
                "Tom",
                "Hanks",
                "tomhanks@gmail.com",
                "tomhanks",
                "1956-07-09",
                "BN2 3TA",
                "109384374839",
                12,
                22
        );



        Employee saima = new Employee(
                "Saima",
                "M",
                "saima@bnta.com",
                "123",
                "2000-01-01",
                "BN3 4TA",
                "123456789",
                13,
                33
        );

        Employee emily = new Employee(
                "Emily",
                "R",
                "emily@bnta.com",
                "123",
                "2000-02-02",
                "BN4 5TA",
                "3456678991",
                14,
                34
        );
        Employee ryan = new Employee(
                "Ryan",
                "N",
                "ryan@bnta.com",
                "123",
                "2000-03-03",
                "BN5 6TA",
                "321123456",
                15,
                35
        );


        Employee aanis = new Employee(
                "Aanis",
                "N",
                "aanisn10@gmail.com",
                "aanis10",
                "2000-09-29",
                "SW3 5GH",
                "012345678910",
                7989,
                2000
        );


        Position position = new Position(
                "HR department",
                "Manager",
                "admin");

        employeeRepository.save(aanis);
        employeeRepository.save(tom);
        employeeRepository.save(saima);
        employeeRepository.save(emily);
        employeeRepository.save(ryan);
        employeeRepository.save(gisele);

//        employee1.setPosition(position);
//        employee2.setPosition(position);
//        position.addEmployee(employee1);
//        position.addEmployee(employee2);
        positionRepository.save(position);
    }


}