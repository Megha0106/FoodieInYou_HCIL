import React from 'react'
import Button from '@mui/material/Button' 
import { TextField } from '@mui/material'
import {WhatsApp,Phone,Instagram,Email} from '@mui/icons-material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import './uploadAckModal.css'

export default function UploadAckModal()
{
    return(
        <div>
            <div className = "thanksDiv">
                <CheckCircleOutlineIcon sx={{ fontSize: 40,color : "#2634f0" }} />
                <h2 className = "thanks">
                      Thanks!!
                </h2>
            </div>
            
            <h2>
                Your recipe has been successfully uploaded.
            </h2>
        </div>

    )
}