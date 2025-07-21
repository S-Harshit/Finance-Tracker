import { useState } from "react"


export const Login = () => {

  const [credentials, setCredentials] = useState({username:"",password:""});
  const handleLogin = (e) => {
    e.preventDefault();
       const existingUsers = JSON.parse(localStorage.getItem('user_details')) ?? []
       const validUser = existingUsers.some(user => {
        return user[credentials.username];})
       console.log("Success!!", validUser,credentials.username, credentials.password );
  }

  const handleInput = (event) => {
    setCredentials({...credentials, [event.target.name]: event.target.value})
  }
  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="text" name="username" id="username" onChange={handleInput} value={credentials.username}/>
        <input type="password" name="password" id="password" onChange={handleInput} value={credentials.password}/>
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}
