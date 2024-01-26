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
                "aanis@bnta.com",
                "123",
                "1972-09-29",
                "SW3 5GH",
                "07908909090",
                7989,
                100000
        );


        Position hrManager = new Position(
                "HR department",
                "Manager",
                "admin");

        Position hrAdmin = new Position(
                "HR department",
                "Admin",
                "admin");

        Position financeEmployee = new Position(
                "Finance",
                "Analyst",
                "employee");

        Position financeManager = new Position(
                "Finance",
                "Manager",
                "admin");

        positionRepository.save(hrAdmin);
        positionRepository.save(hrManager);
        positionRepository.save(financeManager);
        positionRepository.save(financeEmployee);

        aanis.setPosition(hrAdmin);
        gisele.setPosition(hrManager);
        ryan.setPosition(financeEmployee);
        saima.setPosition(financeEmployee);
        emily.setPosition(financeEmployee);

        employeeRepository.save(aanis);
        employeeRepository.save(saima);
        employeeRepository.save(emily);
        employeeRepository.save(ryan);
        employeeRepository.save(gisele);

    }


}