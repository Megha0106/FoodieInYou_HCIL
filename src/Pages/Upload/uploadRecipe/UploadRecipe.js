import React from "react";
import {TextField} from '@mui/material'
import './uploadRecipe.css'

export default function UploadRecipe()
{
    return(
        <div className="leftContainer">
            <TextField
                fullWidth
                variant = 'outlined'
                color = "warning"
                label = "Enter Recipe Name"
                margin = "dense"
            />
            <TextField
                fullWidth
                multiline
                variant = 'outlined'
                color = "warning"
                label = "Enter Ingridients"
                margin = "dense"
                helperText = "Example:1/4 cup sugar,3/4 Cup flour"
                rows = {6}
            />
            <TextField
                fullWidth
                multiline
                variant = 'outlined'
                color = "warning"
                label = "Enter Steps"
                margin = "dense"
                helperText = "Enter new step on new line"
                rows = {10}
            />
            
        </div>
    )
}