import {useState} from 'react'
import { useNavigate } from 'react-router';
export const Signup = () => {

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const [signup, setSignup] = useState();

  const navigate = useNavigate();
  function handleFormChange(event) {
    setFormData((prevData) => {return {...prevData,[event.target.name] : event.target.value}}) 
  }


  function handleSignUp(event) {
       //validate Userinput
    if (!formData.username.trim() || !formData.password.trim()) {
    setSignup("Username and password cannot be empty.");
    return;
    }
    event.preventDefault()
    const existingUsers = JSON.parse(localStorage.getItem('user_details')) ?? []
 
    const userAlreadyExists = existingUsers.some(user => user.username === formData.username)
    if(userAlreadyExists) {
      setSignup('User Already Exists!! Try Some other Username');
      setFormData({username:"",password:""});
      return;
    }
    const userData = [...existingUsers, {[formData.username]: btoa(formData.password) }]
    console.log(userData);
    localStorage.setItem("user_details", JSON.stringify(userData))
    setSignup("SignUp Success!!!");
    setFormData({username:"",password:""});
    setTimeout(()=>{navigate('/home')},2000)
  }

  return (
    <div>
      <form onSubmit={handleSignUp}>
        <label htmlFor='username'>Username</label>
        <input onChange={handleFormChange} id="username" name='username' type="text" value={formData.username}></input>
        <label htmlFor='password'>Password</label>
        <input onChange={handleFormChange} id='password' name='password' type="password" value={formData.password}></input>
        <button id='submit' type="submit">Sign Up</button> 
      </form>
      {signup}
    </div>
  )
}
