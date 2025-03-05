import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"

function SignIn() {
 
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)

  const navigate = useNavigate();

  const handleChange=(e)=>{
    setFormData({...formData, [e.target.id]:e.target.value})
  }

  const handleSubmit=async(e)=>{
   try {
    setLoading(true)
    setError(false)
    e.preventDefault();
    const res = await fetch ('/api/auth/signin',{
      method :'POST',
      headers:{
        'Content-Type' : 'application/json',
      },
      body:JSON.stringify(formData),
    });
    const data = await res.json();
    setLoading(false);
    if(data.success === false){
      setError(true)
      return;
    }
    navigate('/')
   } catch (error) {
    setLoading(false);
    setError(true);  

    
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
      <p className='text-red-600'>{error && "something went wrong"}</p>
    </div>
  )
} 

export default SignIn