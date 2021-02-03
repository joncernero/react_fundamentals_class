//imrs
import React, { useState } from 'react'
import Login from './Login/Login'
import Signup from './Signup/Signup'

//sfc
const Auth = () => {
  const [showLogin, setShowLogin] = useState(true)

  let handleToggle = () => {
    setShowLogin(!showLogin)
    /* if (showLogin === true) {
       setShowLogin(false)
     } else {
      setShowLogin(true)
      testing
    }*/
  }

  return (
    <div>
      {showLogin === true ? <Login /> : <Signup />}
      <button onClick={handleToggle}>Click to Toggle</button>
    </div>
  )
}

export default Auth
