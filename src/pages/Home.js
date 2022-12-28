import React from 'react'
import {useContext} from "react"
import {AppContext} from "../App"

function Home() {
  const {username}=useContext(AppContext)
  return (
    <div>Home Page, User is :{username}</div>
  )
}

export default Home