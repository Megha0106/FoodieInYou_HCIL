import React, { useState } from "react";
import {TextField,Rating,Button,} from '@mui/material'
import './feedback.css'



export default function Feedback()
{
    const[userName,setUserName] = useState("")
    const[userFeedback,setUserFeedback] = useState("")
    const[ratings,setRatings] = useState()
    return(
        <div className="feedbackContainer">
           <h2 className="text">Feedback</h2>
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
                rows = {4}
                id = "user_feedback"
                color = "warning"
                variant="outlined"
                label="Enter Feedback"
                size = "medium"
                margin="normal"
               />
           </div>
           <div className = "ratingsDiv">
                <h3 className="text">Rate this recipe </h3>
                <div className="ratingText">
                    <Rating
                        name="simple-controlled"
                        value={ratings}
                        size = "large"
                        onChange={(event, newValue) => {
                        setRatings(newValue);
                        }}
                    />
                </div>
                <div className = "submit">
                    <Button variant="contained" style = {{fontFamily:'revert',fontWeight:'bold',backgroundColor:"rgb(242,47,13)"}}>Submit</Button>
                </div>
                
           </div>
        </div>
    )


}