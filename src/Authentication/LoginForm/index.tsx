// Login.tsx
import React from 'react';
import { UserLogIn } from '../../types';

import { useUserAuth } from '../../context/useAuthContext';
import { useNavigate } from 'react-router-dom';
const initialValue:UserLogIn={
  email:"",
  password:"",
  
}
const Login: React.FC = () => {
  const {googleSignIn,logIn}=useUserAuth();
  const [userLogIninfo,setuserLogIninfo]=React.useState<UserLogIn>(initialValue);
  const navigate=useNavigate();
  const handleGoogleSignIn=async(e:React.MouseEvent<HTMLElement>)=>{
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");

    } catch (error) {
      console.log(error);
    }
  }
const handleSubmit =async(e:React.MouseEvent<HTMLFormElement>)=>{
 
  e.preventDefault();
  try {
    await logIn(userLogIninfo.email,userLogIninfo.password);
    navigate("/home");
    console.log(userLogIninfo);
  } catch (error) {
    console.log(error);
  }
}
   
  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      
      <input
      id='email'
        type="email"
        value={userLogIninfo.email}
        onChange={(e:React.ChangeEvent<HTMLInputElement>) => setuserLogIninfo({...userLogIninfo,email:e.target.value})}//...is the spread opewrator
        placeholder="Email"
       
      />
      <input
      id='password'
      type="password"
      value={userLogIninfo.password}
      onChange={(e:React.ChangeEvent<HTMLInputElement>) => setuserLogIninfo({...userLogIninfo,password:e.target.value})}//...is the spread opewrator
      placeholder="password"
     
      />
      <button type="submit">LogIn</button>
    </form>
  );
};

export default Login;
