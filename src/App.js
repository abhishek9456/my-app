
import React,{ useState } from 'react';
import './App.css';
import About from  './components/About'
import Textform from './components/Textform';
import Navbar from './components/navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const[Mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(Mode==='light'){
          setMode('dark')
          document.body.style.backgroundColor='black';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
    <Router>
    <Navbar title="AnoSt" mode={Mode} toggleMode={toggleMode} type={Mode}/>  
    <div className='container my-3'>
    <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
             <Textform heading="Enter the the text "/>
          </Route>
        </Switch>
        </div>
        </Router>
    </>
  );
}

export default App;
