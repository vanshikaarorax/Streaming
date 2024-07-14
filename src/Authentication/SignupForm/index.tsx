// Signup.tsx
import React, { useState } from 'react';
import { UserSignIn } from '../../types';
import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth';
import { useUserAuth } from '../../context/useAuthContext';
import { useNavigate } from 'react-router-dom';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
const initialValue:UserSignIn={
  email:"",
  password:"",
  confirmPassword:""
}
const Signup: React.FC = () => {
  const {googleSignIn,signUp}=useUserAuth();
  const [userInfo,setUserInfo]=React.useState<UserSignIn>(initialValue);
  const navigate=useNavigate();
  const handleGoogleSignIn=async(e:React.MouseEvent<HTMLElement>)=>{
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
     

    } catch (error) {
      console.log(error);
    }
  }
  const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Create user in Firebase Authentication
      await signUp(userInfo.email,userInfo.password);
      
  
      // Navigate to home page or desired location after signup
      navigate("/");
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };
  
   
  return (
    <form onSubmit={handleSubmit}>
      <h1>Signup</h1>
      
      <input
      id='email'
        type="email"
        value={userInfo.email}
        onChange={(e:React.ChangeEvent<HTMLInputElement>) => setUserInfo({...userInfo,email:e.target.value})}//...is the spread opewrator
        placeholder="Email"
       
      />
      <input
      id='password'
      type="password"
      value={userInfo.password}
      onChange={(e:React.ChangeEvent<HTMLInputElement>) => setUserInfo({...userInfo,password:e.target.value})}//...is the spread opewrator
      placeholder="password"
     
      />
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;
