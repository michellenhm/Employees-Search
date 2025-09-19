import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";


const Dashboard = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            try{
                const response = await fetch("http://localhost:8080/api/employees", {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                });
                const data = await response.json();
                setEmployees(data);
                
            } catch (e) {
                console.log("could not fetch employees: ", e);
            }
        }
        fetchEmployees();
    }, []);

    const handleDelete = async (employeeId) => {
        try{
            const response = await fetch(`http://localhost:8080/api/employee/${employeeId}`, {
                method: 'DELETE',
            });
            if (response.ok){
                setEmployees((prevEmployees) => 
                    prevEmployees.filter((employee) => employee.id !== employeeId)
                )
            }
            console.log(`Employee with id ${employeeId} was deleted successfully`)
        } catch (e) {
            console.log("could not delete employee: ", e.message);
        }
    }

    return (
        <div>
            <Container className="mt-5">
                <Row>
                    <Col>
                        <h1 className="text-center">Employees</h1>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Department</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees.map( (employee) => (
                                    <tr key={employee.id}>
                                        <td>{employee.name}</td>
                                        <td>{employee.email}</td>
                                        <td>{employee.phone}</td>
                                        <td>{employee.department}</td>
                                        <td>
                                            <Button variant="outline-secondary">Update</Button>
                                            <Button onClick={() => handleDelete(employee.id)} variant="outline-danger">Delete</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </Table>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Dashboard;