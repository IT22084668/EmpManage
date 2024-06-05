import React from "react"
import NavHead from "../Components/navHead";
import Dash_container from "../Components/dash_container";

import '../css/bootstrap.min.css'

import { Box} from "@mui/material";

const dashboard =({}) =>{
    return(
        <Box >

            <NavHead />
            <Dash_container />
            
        </Box>
    )
}

export default dashboard;