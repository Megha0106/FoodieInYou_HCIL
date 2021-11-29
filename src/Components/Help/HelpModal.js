import React from 'react'
import Button from '@mui/material/Button' 
import { TextField } from '@mui/material'
import {WhatsApp,Phone,Instagram,Email} from '@mui/icons-material'
import './helpModal.css'
export default function HelpModal()
{
    return(
        <div className = "modalContainer">
            <div className = "helpText">
            <h3 className = "text">We're Here To Help You</h3>
            </div>
            
            <div className="input">
               <TextField
                fullWidth 
                color = "warning"
                id = "user_name"
                variant="outlined"
                label="Your Name"
                size = "medium"
                margin="dense"
               />
               <TextField
                fullWidth 
                multiline
                id = "user_Email"
                color = "warning"
                variant="outlined"
                label="Email Id"
                size = "medium"
                margin="normal"
               />
               <TextField
                fullWidth 
                multiline
                rows = {4}
                id = "user_query"
                color = "warning"
                variant="outlined"
                label="Your Queries"
                size = "medium"
                margin="normal"
               />
            </div>
            <div className = "ask">
                    <Button variant="contained" style = {{fontFamily:'revert',fontWeight:'bold',backgroundColor:"rgb(242,47,13)",padding:5,color:"white"}}>Ask Now</Button>
            </div>
            <h4 className = "text">You Can reach to us by</h4>
            <div className = "contactLogo">
                <Phone sx={{ fontSize: 30,color : "blue" ,marginLeft:10}}/>
                <Email sx={{ fontSize: 30,color : "red" ,marginLeft:5}}/>
                <WhatsApp sx={{ fontSize: 30,color : "green" ,marginLeft:5}}/>
                <Instagram sx={{ fontSize: 30,color : "#ff00ff" ,marginLeft:5}}/>
            </div>
        </div>
    )
}