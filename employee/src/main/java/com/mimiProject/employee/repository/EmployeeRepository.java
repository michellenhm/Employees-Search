package com.mimiProject.employee.repository;

import com.mimiProject.employee.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// component responsible for handle data - CRUD
@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Long>{ //component & PK

}

