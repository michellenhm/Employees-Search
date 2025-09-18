import "./PostUser.css"
import React, { useState } from 'react'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const PostUser = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        department: ""
    });
    const [errors, setErrors] = useState({});

    const handleInputChange = (event) => {
        const {name,value} = event.target;
        
        //immediate restrictions
        if (name === "phone" && (!/^\d*$/.test(value)) || (value.length>10) ) {
            return; 
        }

        if (name === "name" && value !== "" && !/^[A-Za-z\s]+$/.test(value)){
            return;
        }

        if (name === "department" && value !== "" && !/^[A-Za-z\s]+$/.test(value)){
            return;
        }

        setFormData({
            ...formData,
            [name]:value,
        })

        //clear error when user typing
        if (errors[name]) {
          setErrors({ ...errors, [name]: "" });
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let newErrors = {};

        //ensure user fill each field before submit
        Object.keys(formData).forEach((key) => {
            if (!formData[key]) {
                newErrors[key] = "This field is required";
            }
        });

        // validate input, add errors
        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }

        if (Object.keys(newErrors).length >0) {
            setErrors(newErrors);
            return;
        }

        console.log("Form submitted: ", formData);
    }

    return (
        <div className="center-form">
            <h1>Add New Employee</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicName">
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter employee name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    {errors.name && <p style={{color: "red"}}> {errors.name} </p>}
                </Form.Group>

                <Form.Group controlId="formBasicName">
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter employee email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    {errors.email && <p style={{color: "red"}}> {errors.email} </p>}
                </Form.Group>

                <Form.Group controlId="formBasicName">
                    <Form.Control
                        type="phone"
                        name="phone"
                        placeholder="Enter employee phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                    />
                    {errors.phone && <p style={{color: "red"}}> {errors.phone} </p>}
                </Form.Group>

                <Form.Group controlId="formBasicName">
                    <Form.Control
                        type="department"
                        name="department"
                        placeholder="Enter employee department"
                        value={formData.department}
                        onChange={handleInputChange}
                    />
                    {errors.department && <p style={{color: "red"}}> {errors.department} </p>}
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100"> Add Employee </Button>

                
            </Form>
        </div>
    )
}

export default PostUser