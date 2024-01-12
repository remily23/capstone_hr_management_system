package com.server.Capstone.Project.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jdk.jfr.Name;

import java.util.List;

@Table(name = "positions")
@Entity

public class Position {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long positionId;

    @Column
    @Name(value = "department")
    private String department;
    @Column
    private String title;
    @Column
    private String accessLevel;

    @OneToMany(mappedBy = "position")
    @JsonIgnoreProperties({"position"})
    private List<Employee> employees;

    public Position(String department, String title, String accessLevel, List<Employee> employees) {
        this.department = department;
        this.title = title;
        this.accessLevel = accessLevel;
        this.employees = employees;
    }

    public Position() {
    }

    public Long getPositionId() {
        return positionId;
    }

    public void setPositionId(Long positionId) {
        this.positionId = positionId;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAccessLevel() {
        return accessLevel;
    }

    public void setAccessLevel(String accessLevel) {
        this.accessLevel = accessLevel;
    }

    public List<Employee> getEmployees() {
        return employees;
    }

    public void setEmployees(List<Employee> employees) {
        this.employees = employees;
    }
}
