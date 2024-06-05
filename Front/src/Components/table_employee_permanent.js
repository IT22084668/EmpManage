import { Box } from "@mui/material"
import '../css/bootstrap.min.css'
import '../css/table.css'
import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteEmployee_permanent } from "../api/addEmployeePermanentDataApi";


const Table_employee_permanent = ({rows2,fetchData}) =>{

    const navigate = useNavigate();
    
    const viewProfile = (employee) => {
        navigate('/profile', { state: { employeeData: employee } });
    };

    const handleDelete2 = async (nic) => {
        try {
            await deleteEmployee_permanent(nic); 
            console.error('aaaaa')
            fetchData();
            console.error('bbbb')

     
        } catch (error) {
            console.error("Error deleting employee:", error);
  
        }
    };
        

    return(
        <Box >
           
        <div className="table-possition">
            <table class="table-fill">
            <thead>
            <tr>
            <th class="text-left">Name</th>
            <th class="text-left">NIC</th>
            <th class="text-left">Age</th>
            <th class="text-left">Email</th>
            <th class="text-left">Whatsapp No.</th>
            <th class="text-left">Contact No.</th>
            <th class="text-left">Password</th>
            <th class="text-left">Action</th>
            </tr>
            </thead>
            <tbody class="table-hover">
            {rows2 && rows2.length > 0 && rows2.map(row => (
                            <tr key={row.nic}>
                                <td className="text-left">{row.name}</td>
                                <td className="text-left">{row.nic}</td>
                                <td className="text-left">{row.age}</td>
                                <td className="text-left">{row.email}</td>
                                <td className="text-left">{row.wNumber}</td>
                                <td className="text-left">{row.cNumber}</td>
                                <td className="text-left">{row.password}</td>
                                <td className="text-left">
                                    <button className="button-42" onClick={() => viewProfile(row)}>View</button>
                                    <button className="button-42" onClick={() => handleDelete2(row.nic)}>Delete</button>

                                </td>
                            </tr>
                        ))}
            </tbody>
            </table>
  

            </div>
        </Box>
    )
}
export default Table_employee_permanent;