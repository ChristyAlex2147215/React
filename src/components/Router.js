import React from 'react'
import {Link,BrowserRouter as Router,Routes,Route} from  'react-router-dom' 
import ContactUs from './pages/ContactUs'
import Home from './pages/Home'
import User from './pages/User'
import Notfound from './pages/Notfound'
import {useState,createContext} from "react"

export const AppContext=createContext();

function App() {
  const [username,setUsername]=useState("Christy")
  
  
  return (
    <div className='App text-center'>
    <Router>
    <AppContext.Provider value={{username,setUsername}}>
    <div>
    <Link to="/">Home</Link>
    <Link to="/user">User</Link>
    <Link to="/contact">Contact Us</Link>
    </div>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/user' element={<User/>}/>
    <Route path='/contact' element={<ContactUs/>}/>
    <Route path='*' element={<Notfound/>}/>
    </Routes>
    </AppContext.Provider>
    </Router>

    </div>
  )
}

export default App