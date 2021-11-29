import React, { useState } from "react";
import {TextField,MenuItem,Button} from '@mui/material'
import Modal from 'react-modal'
import { IconButton } from '@material-ui/core';
import { HelpOutline,Close } from '@mui/icons-material';

import './uploadPhotos.css'
import './UploadACK/UploadAckModal'
import UploadAckModal from "./UploadACK/UploadAckModal";
import UploadConfirm from "./uploadConfirm/UploadConfirm";
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

      const [modalIsOpen, setModalIsOpen] = useState(false);

        const setModalIsOpenToTrue =()=>{
            setModalIsOpen(true)
        }

    const setModalIsOpenToFalse =()=>{
     setModalIsOpen(false)
    }

    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight            : '2px',
          transform             : 'translate(-50%, -50%)', 
          
          border                : "2px solid #ff0000",
          //backgroundColor: "#d2d5f7"
               
        }
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
                <Button variant="contained" onClick = {setModalIsOpenToTrue} style = {{fontFamily:'revert',fontWeight:'bold',backgroundColor:"rgb(242,47,13)"}}>Upload Recipe</Button>
                </div>
               
            </div>

            <Modal isOpen={modalIsOpen} style = {customStyles}>
            <IconButton color="secondary" onClick = {setModalIsOpenToFalse}>
                <Close />
            </IconButton>
                 <UploadAckModal/>
            </Modal>
        </div>
    )
}