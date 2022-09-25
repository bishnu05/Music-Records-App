import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { login } from '../Redux/AuthReducer/action';
import { USER_LOGIN_SUCCESS } from '../Redux/AuthReducer/actiontypes';

export const Login = () => {
  const navigate=useNavigate()
 const [email,setEmail] =useState("");
 const [password,setPassword] = useState("");
 const dispatch = useDispatch();
 const location = useLocation()
//  console.log(location)
const comingFrom = location.state?.from?.pathname||"/"

 const handleSubmit = (e)=>{
    e.preventDefault();
    if(email && password){
      dispatch(login({email,password})).then((r)=>{
        if(r.type===USER_LOGIN_SUCCESS){
          navigate(comingFrom,{replace:true})
        }
      });
    }
 };

  return (
    <div>
      <h1>LOGIN PAGE</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Email</label>
          <input type="email" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
          <label>User Password</label>
          <input type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button>LOGIN</button>
      </form>
    </div>
  )
}
