import React from 'react'
import {Link,BrowserRouter as Router,Routes,Route} from  'react-router-dom' 
import ContactUs from './pages/ContactUs'
import Home from './pages/Home'
import User from './pages/User'
import CatFacts from "./pages/CatFacts"
import Notfound from './pages/Notfound'
import UserRegistration from './pages/UserRegistration'
import {useState,createContext} from "react"
import {QueryClient,QueryClientProvider} from "@tanstack/react-query"
import NavBar from './pages/NavBar'

export const AppContext=createContext();

function App() {
  const [username,setUsername]=useState("Christy")
  const client=new QueryClient({defaultOptions:{queries:{refetchOnWindowFocus:true}}})

  return (
    <div className='App text-center'>
    <Router>
    <AppContext.Provider value={{username,setUsername}}>
    <QueryClientProvider client={client}>
    <NavBar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/user' element={<User/>}/>
    <Route path='/contact' element={<ContactUs/>}/>
    <Route path='/cat-facts' element={<CatFacts/>}/>
    <Route path='/register' element={<UserRegistration/>}/>
    <Route path='*' element={<Notfound/>}/>
    </Routes>
    </QueryClientProvider>
    </AppContext.Provider>
    </Router>

    </div>
  )
}

export default App