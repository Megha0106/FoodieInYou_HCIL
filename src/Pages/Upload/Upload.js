import React from 'react'
import './Upload.css'
import Navbar from '../Home/Nav'
import UploadRecipe from './uploadRecipe/UploadRecipe'
import UploadPhotos from './uploadPhotos/UploadPhotos'

function Upload() {
    return (
        <div>
            <Navbar />   
            <h2 className = "uploadText">Upload Recipe</h2> 
            <div className="splitScreen">
                
                    <div><UploadRecipe/></div>
                    <div ><UploadPhotos/></div>
            </div>
        </div>
    )
}

export default Upload
