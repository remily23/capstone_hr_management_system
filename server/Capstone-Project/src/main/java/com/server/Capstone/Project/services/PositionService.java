package com.server.Capstone.Project.services;

import com.server.Capstone.Project.models.Employee;
import com.server.Capstone.Project.models.Position;
import com.server.Capstone.Project.respositories.EmployeeRepository;
import com.server.Capstone.Project.respositories.PositionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PositionService {

    @Autowired
    PositionRepository positionRepository;

    @Autowired
    EmployeeRepository employeeRepository;

    public Position newPosition(Position position) {
        return positionRepository.save(position);
    }

    public List<Position> findAllPositions() {
        return positionRepository.findAll();
    }



}
