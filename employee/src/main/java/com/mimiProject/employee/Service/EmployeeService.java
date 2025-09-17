package com.mimiProject.employee.Service;

import com.mimiProject.employee.entity.Employee;
import com.mimiProject.employee.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
@Service
@RequiredArgsConstructor // want to inject employee repo
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

    //create new employee. now need endpoint.
    public Employee postEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }
}
