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
    private Long id;

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
    private String phoneNumber;
    @Column
    private int proRata;
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
                    String dateOfBirth,
                    String address,
                    String phoneNumber,
                    int proRata,
                    int salary
                    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.proRata = proRata;
        this.salary = salary;
    }

    public Employee() {
    }

    public Long getid() {
        return id;
    }

    public void setid(Long id) {
        this.id = id;
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

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public int getProRata() {
        return proRata;
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

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void setProRata(int proRata) {
        this.proRata = proRata;
    }

    public void setSalary(int salary) {
        this.salary = salary;
    }

//    public void setPosition(Position position) {
//        this.position = position;
//    }

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }
}
