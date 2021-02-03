import React, { useState } from 'react'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signUpOnChange = event => {
    console.log(event.target.value)
    setEmail(event.target.value)
  }
  const passwordOnChange = event => {
    console.log(event.target.value)
    setPassword(event.target.value)
  }

  return (
    <div>
      <h3>SignUp</h3>
      <input
        type='text'
        placeholder='email'
        value={email}
        onChange={e => signUpOnChange(e)}
      />
      <input
        type='text'
        placeholder='password'
        value={password}
        onchange={e => passwordOnChange(e)}
      />
    </div>
  )
}
export default Signup
