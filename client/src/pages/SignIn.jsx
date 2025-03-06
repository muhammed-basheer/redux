import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';
 import { useDispatch, useSelector } from 'react-redux';

function SignIn() {
 
  const [formData, setFormData] = useState({});
  const {loading,error} = useSelector((state)=> state.user);


  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange=(e)=>{
    setFormData({...formData, [e.target.id]:e.target.value})
  }

  const handleSubmit=async(e)=>{
   try {
       dispatch(signInStart())
   
    e.preventDefault();
    const res = await fetch ('/api/auth/signin',{
      method :'POST',
      headers:{
        'Content-Type' : 'application/json',
      },
      body:JSON.stringify(formData),
    });
    const data = await res.json();
    console.log("data",data)
    if(data.success === false){
      dispatch(signInFailure(data.message))
      return;
    }
    dispatch(signInSuccess(data))
    navigate('/')
   } catch (error) {  
     dispatch(signInFailure(error))
  

    
   }
  }

  return (
    <div className='max-w-lg p-3 mx-auto'>
      <h1 className='text-3xl text-center my-7 font-semibold'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col  gap-4 '>
        
        <input type="email" placeholder='Email' id='email' className='bg-slate-300 p-3 rounded-lg '
         onChange={handleChange}/>

        <input type="password" placeholder='Password' id='password' className='bg-slate-300 p-3 rounded-lg '
         onChange={handleChange}/>

        <button disabled={loading} className='bg-slate-700 p-3 rounded-lg hover:opacity-95 disabled:opacity-80'>{loading ? "Loading...": "Sign In"}</button>
      </form>
      <div className="flex gap-2 myt-5">
        <p>Dont have an account ?</p>
      <Link to='/signup'>  <span className='text-blue-500'>sign up</span></Link>
      </div>
      <p className='text-red-600'>{error ?error || "something went wrong" : ""}</p>
    </div>
  )
} 

export default SignIn