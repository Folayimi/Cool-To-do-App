import React, {useState, useEffect} from 'react'
import Todo from "./Todo";
import './index.css'
import Background from './Background'
import Footer from './Footer'
import {BrowserRouter as 
    Router, 
    Routes, 
    Route} from 'react-router-dom'

function App (){
    const [size,setSize] = useState(window.innerWidth)
    const [mobile,setMobile] = useState(false);
    const [darkMode, setDarkMode] = useState(true);
    window.addEventListener('resize',()=>{
        setSize(window.innerWidth);
    })
    window.removeEventListener('resize',()=>{
        setSize(window.innerWidth);
    })
    useEffect(()=>{
        if(size<=625){
            setMobile(true)
        }
        else if(size>625){
            setMobile(false)
        }
    },[size])
    return(
        <>
            <Router>
                <Background mobile={mobile} darkMode={darkMode}/>
                <Routes>
                    <Route exact path="/" element={
                        <Todo mobile={mobile} darkMode={darkMode}
                        setDarkMode={setDarkMode}/>
                    }/>                    
                </Routes>         
                <Footer mobile={mobile} darkMode={darkMode}/>       
            </Router>            
        </>
    )
}

export default App;