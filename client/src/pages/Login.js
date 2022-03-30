import React from 'react'
import LoginCard from "../components/LoginCard"
import {Navigate} from "react-router-dom"

function Login({user, setUser}) {
  
  return (
    <div>
    {user ? (
      <Navigate to="/" />
    ):(
    <LoginCard setUser={setUser} />)
    }
    </div>
  )
}

export default Login