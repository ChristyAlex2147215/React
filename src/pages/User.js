import React from 'react'
import ChangeUser from "./ChangeUser"
import {useContext} from "react"
import {AppContext} from "../App"


function User() {
  const {username}=useContext(AppContext)
  return (
    <div>User's Page, user is:{username}
      <ChangeUser/>
    </div>
  )
}

export default User