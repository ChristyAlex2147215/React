import {React,useState} from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'

function ChangeUser() {
    const [newUsername,setNewUsername]=useState()
    const {setUsername}=useContext(AppContext)
  return (
    <div>
        <input onChange={(e)=>{setNewUsername(e.target.value)}}/>
        <button onClick={(e)=>setUsername(newUsername)}>Change Username</button>
    </div>
  )
}

export default ChangeUser