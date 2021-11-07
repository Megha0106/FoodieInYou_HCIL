import React from 'react'
import Navbar from '../Home/Nav'
import Recipe from './recipe/Recipe'
import Feedback from './feedback/Feedback'
import './Read.css'

function Read() {
    return (
        <div>
            <Navbar />
            <div className="splitScreen">
               
                <div className="topPane"><Recipe/></div>
                <div className="bottomPane"><Feedback/></div>
            </div>
        </div>
    )
}

export default Read
