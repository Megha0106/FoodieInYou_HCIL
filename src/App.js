import React from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar' 

import { Switch, Route, BrowserRouter} from 'react-router-dom';
import Landing from './Pages/Landing/Landing'
import Home from './Pages/Home/Home'
import Read from './Pages/Read/Read'
import SignIn from './Pages/SignIn/SignIn'
import SignUp from './Pages/SignUp/SignUp'
import Upload from './Pages/Upload/Upload'

function App() {
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
    </div>
  );
}

export default App;
