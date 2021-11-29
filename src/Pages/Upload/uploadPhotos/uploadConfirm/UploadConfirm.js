import React from 'react'

import { TextField } from '@mui/material'
import {WhatsApp,Phone,Instagram,Email} from '@mui/icons-material'
import Help from '@mui/icons-material/Help';
import Button from '@mui/material/Button';
import './uploadConfirm.css'

export default function UploadConfirm()
{
    return(
        <div>
            <div className = "msgDiv">
                <Help sx={{ fontSize: 30,color : "#2634f0" }} />
                <h2 className = "msg">
                      You are about to upload recipe. Are you sure?
                </h2>
            </div>
            
            <div className = "btnDiv">
            <h5 className = "yesText">YES</h5>
            <h5 className = "cancelText">CANCEL</h5>
            </div>
        </div>

    )
}