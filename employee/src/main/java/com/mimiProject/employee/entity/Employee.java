package com.mimiProject.employee.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Employee {
    //match values in db
    @Id //make it primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) // make it auto incremented
    private Long id;

    private String name;
    private String email;
    private String phone;
    private String department;
}
