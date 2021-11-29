import React,{useState} from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Button from '@mui/material/Button' 
import { IconButton } from '@material-ui/core';
import { HelpOutline,Close } from '@mui/icons-material';
import Modal from 'react-modal'

import { Switch, Route, BrowserRouter} from 'react-router-dom';
import Landing from './Pages/Landing/Landing'
import Home from './Pages/Home/Home'
import Read from './Pages/Read/Read'
import SignIn from './Pages/SignIn/SignIn'
import SignUp from './Pages/SignUp/SignUp'
import Upload from './Pages/Upload/Upload'
import HelpModal from './Components/Help/HelpModal';
import { border } from '@mui/system';


function App() {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue =()=>{
    setModalIsOpen(true)
}

const setModalIsOpenToFalse =()=>{
    setModalIsOpen(false)
}
const customStyles = {
  content : {
    top                   : '30%',
    left                  : '70%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight            : '2px',
    /* transform             : 'translate(-50%, -50%)', */
    
    border                : "2px solid #ff0000"
         
  }
};
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" > <Landing /> </Route>
        <Route exact path="/home" > <Home/>  </Route>
        <Route exact path="/read" > <Read /> </Route>
        <Route exact path="/sign-in" > <SignIn /> </Route>
        <Route exact path="/sign-up" > <SignUp /> </Route>
        <Route exact path="/upload-recipe" > <Upload /> </Route>
    </Switch>  
    </BrowserRouter> 
      <div className = "helpButton">
      <Button variant="contained" startIcon={<HelpOutline />} style = {{fontFamily:'revert',fontWeight:'bold',backgroundColor:"blue",padding:7,color:"white",borderRadius:20}} onClick = {setModalIsOpenToTrue}>Help</Button>


      </div>
     
        <Modal isOpen={modalIsOpen} style = {customStyles}>
        <IconButton color="secondary" onClick = {setModalIsOpenToFalse}>
            <Close />
      </IconButton>
             <HelpModal/>
        </Modal>
      

    </div>
  );
}

export default App;
