package com.server.Capstone.Project.respositories;

import com.server.Capstone.Project.models.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository <Employee , Long > {
}
