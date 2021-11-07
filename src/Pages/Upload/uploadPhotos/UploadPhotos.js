import React, { useState } from "react";
import {TextField,MenuItem,Button} from '@mui/material'
import './uploadPhotos.css'
export default function UploadPhotos()
{
    const[category,setCategory] = useState() 
    const categories = [
        {value:'Cuisine'},
        {value:'Drinks'},
        {value:'Patron'},
        {value:'Dinner'},
        {value:'Breakfast'},
        {value:'Snacks'},
        {value:'Other'}
    ];

    const handleChange = (event) => {
        setCategory(event.target.value);
      };

    return(
        <div className = "rightDiv">
            <div className = "centeredDiv">
                <h2 className = "helloText">Hello Chef !!</h2>
                <img className = "chefImage" src = "https://thumbs.dreamstime.com/b/chef-cartoon-giving-thumb-up-isolated-white-background-176171655.jpg" alt = "hello"/>
            </div>
            
            <div className = "category">
                <TextField
                    id="category"
                    select
                    
                    style = {{width:500}}
                    label="Category"
                    value={category}
                    onChange={handleChange}
                    helperText="Select recipe category"
                    color = "warning"
                    >
                   {categories.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.value}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
            <div className="buttonContainer">
                <Button variant="outlined" style = {{fontFamily:'revert',fontWeight:'bold',borderColor:"rgb(242,47,13)",color:"rgb(242,47,13)"}}>Upload Photos</Button>
                <div className = "uploadButton">
                <Button variant="contained" style = {{fontFamily:'revert',fontWeight:'bold',backgroundColor:"rgb(242,47,13)"}}>Upload Recipe</Button>
                </div>
               
            </div>
        </div>
    )
}