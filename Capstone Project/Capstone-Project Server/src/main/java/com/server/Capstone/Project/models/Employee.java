package com.server.Capstone.Project.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jdk.jfr.Name;
import org.springframework.core.annotation.Order;

import java.time.LocalDate;

@Table(name= "employees")
@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long employeeId;

    @OrderColumn
    @Name(value= "first_name")
    private String firstName;
    @Name(value="last_name")
    private String lastName;
    @OrderColumn
    private String email;
    @Column
    private String password;
    @Column
    private String dateOfBirth;
    @Column
    private String address;
    @Column
    private int phoneNumber;
    @Column
    private int proRota;
    @Column
    private int salary;
    @Column
    private Long positionId;


    @ManyToOne
    @JsonIgnoreProperties ({"employee"})
    @JoinColumn (name = "position")
    private Position position;

    public Employee(String firstName,
                    String lastName,
                    String email,
                    String password,
                    String dateOfBirth,
                    String address,
                    int phoneNumber,
                    int proRota,
                    int salary,
                    Long positionId
                    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.proRota = proRota;
        this.salary = salary;
        this.positionId = positionId;
    }

    public Employee() {
    }

    public Long getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(Long employeeId) {
        this.employeeId = employeeId;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public String getAddress() {
        return address;
    }

    public int getPhoneNumber() {
        return phoneNumber;
    }

    public int getProRota() {
        return proRota;
    }

    public int getSalary() {
        return salary;
    }

//    public Position getPosition() {
//        return position;
//    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setPhoneNumber(int phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void setProRota(int proRota) {
        this.proRota = proRota;
    }

    public void setSalary(int salary) {
        this.salary = salary;
    }

//    public void setPosition(Position position) {
//        this.position = position;
//    }
    public Long getPositionId() {
        return positionId;
    }

    public void setPositionId(Long positionId) {
        this.positionId = positionId;
    }

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }
}
