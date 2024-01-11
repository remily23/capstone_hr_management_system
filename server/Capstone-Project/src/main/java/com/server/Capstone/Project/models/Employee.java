package com.server.Capstone.Project.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jdk.jfr.Name;

import java.time.LocalDate;

@Table(name= "employees")
@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    @Name(value= "first_name")
    private String firstName;
    @Name(value="last_name")
    private String lastName;
    @Column
    private String email;
    @Column
    private String password;
    @Column
    private LocalDate dateOfBirth;
    @Column
    private String address;
    @Column
    private int phoneNumber;
    @Column
    private int proRota;
    @Column
    private int salary;


    @ManyToOne
    @JsonIgnoreProperties ({"employee"})
    @JoinColumn (name = "position")
    private Position position;

    public Employee(String firstName,
                    String lastName,
                    String email,
                    String password,
                    LocalDate dateOfBirth,
                    String address,
                    int phoneNumber,
                    int proRota,
                    int salary,
                    Position position) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.proRota = proRota;
        this.salary = salary;
        this.position = position;
    }

    public Long getId() {
        return id;
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

    public LocalDate getDateOfBirth() {
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

    public Position getPosition() {
        return position;
    }

    public void setId(Long id) {
        this.id = id;
    }

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

    public void setDateOfBirth(LocalDate dateOfBirth) {
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

    public void setPosition(Position position) {
        this.position = position;
    }
}
