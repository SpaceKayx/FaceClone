import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import { deleteEmployee, listEmployees } from '../service/EmployeeService'
import Button from 'react-bootstrap/esm/Button'
import { useNavigate } from 'react-router'



const ListEmployee = () => {
    const [employees, setEmployees] = useState([])
    useEffect(  () => {
         getAllEmployee()
    },[])

    const getAllEmployee = async () => {
        await listEmployees().then((response) =>{
            console.log(response.data);
            setEmployees(response.data)
        }).catch(error =>{
            console.error(error);
        })
    }

    const navigate = new useNavigate()
    function addEmployee()
    {
        navigate("/add-employee")
    }

    function removeEmployee(id) {
        deleteEmployee(id).then(resp =>{
            getAllEmployee()
        }).catch(error =>{
            console.error(error);
        })
    }
    return (
        <Container className="overflow-x-auto" style={{minHeight: "1000px"}}>
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm my-3">
                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">ID</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Username</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Password</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">First Name</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Last Name</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Email</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {
                        employees.map((value) =>
                            <tr className="odd:bg-gray-50">
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{value.id}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{value.username}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{value.password}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{value.firstName}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{value.lastName}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{value.email}</td>
                                <td className="flex gap-2 px-4 py-2">
                                    <Button onClick={() => navigate(`/update-employee/${value.id}`)}>Update</Button>
                                    <Button onClick={() => removeEmployee(value.id)} className='bg-danger'>Delete</Button>

                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
            <Button onClick={addEmployee}>Create</Button>
        </Container>
    )
}

export default ListEmployee
