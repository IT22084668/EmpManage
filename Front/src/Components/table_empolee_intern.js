import React from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { deleteEmployee_intern } from "../api/addEmployeeInternDataApi";


const Table_employee_intern = ({ rows,fetchData }) => {
    const navigate = useNavigate();

    const viewProfile = (employee) => {
        navigate('/profile', { state: { employeeData: employee } });
    };

    const handleDelete = async (nic) => {
        try {
            await deleteEmployee_intern(nic); 
            fetchData();
     
        } catch (error) {
            console.error("Error deleting employee:", error);
  
        }
    };

    

   
    return (
        <Box>
            <div className="table-possition">
                <table className="table-fill">
                    <thead>
                        <tr>
                            <th className="text-left">Name</th>
                            <th className="text-left">NIC</th>
                            <th className="text-left">Age</th>
                            <th className="text-left">Email</th>
                            <th className="text-left">Whatsapp No.</th>
                            <th className="text-left">Contact No.</th>
                            <th className="text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody className="table-hover">
                        {rows && rows.length > 0 && rows.map(row => (
                            <tr key={row.nic}>
                                <td className="text-left">{row.name}</td>
                                <td className="text-left">{row.nic}</td>
                                <td className="text-left">{row.age}</td>
                                <td className="text-left">{row.email}</td>
                                <td className="text-left">{row.wNumber}</td>
                                <td className="text-left">{row.cNumber}</td>
                                <td className="text-left">
                                    <button className="button-42" onClick={() => viewProfile(row)}>View</button>
                                    <button className="button-42" onClick={() => handleDelete(row.nic)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Box>
    );
};

export default Table_employee_intern;
