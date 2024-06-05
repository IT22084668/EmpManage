import { Box } from "@mui/material"
import '../css/bootstrap.min.css'
import '../css/table.css'


const table_report_permanent= ({}) =>{
    

    return(
        <Box >
           
        <div className="table-possition">
            <table class="table-fill">
            <thead>
            <tr>
            <th class="text-left">Name</th>
            <th class="text-left">NIC</th>
            <th class="text-left">Attendance</th>
            <th class="text-left">OT hours</th>
            <th class="text-left">Monthly Salary</th>
            </tr>
            </thead>
            <tbody class="table-hover">
            <tr>
            
            </tr>
            </tbody>
            </table>
  

            </div>
        </Box>
    )
}
export default table_report_permanent;