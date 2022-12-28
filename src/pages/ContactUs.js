import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'

function ContactUs() {
  const {username}=useContext(AppContext)
  return (
    <div>ContactUs Page, User is :{username}</div>
  )
}

export default ContactUs