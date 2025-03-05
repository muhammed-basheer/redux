import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"

function SignUp() {
 
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
    const res = await fetch ('/api/auth/signup',{
      method :'POST',
      headers:{
        'Content-Type' : 'application/json',
      },
      body:JSON.stringify(formData),
    });
    const data = await res.json();
    console.log(data)
    setLoading(false);
    if(data.success === false){
      setError(true)
    }
    navigate('/signin')
   } catch (error) {
    setLoading(false);
    
   }
  }

  return (
    <div className='max-w-lg p-3 mx-auto'>
      <h1 className='text-3xl text-center my-7 font-semibold'>sign up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col  gap-4 '>
        <input type="text" placeholder='Username' id='username' className='bg-slate-300 p-3 rounded-lg 
        ' onChange={handleChange}/>

        <input type="email" placeholder='Email' id='email' className='bg-slate-300 p-3 rounded-lg '
         onChange={handleChange}/>

        <input type="password" placeholder='Password' id='password' className='bg-slate-300 p-3 rounded-lg '
         onChange={handleChange}/>

        <button disabled={loading} className='bg-slate-700 p-3 rounded-lg hover:opacity-95 disabled:opacity-80'>{loading ? "Loading...": "Sign Up"}</button>
      </form>
      <div className="flex gap-2 myt-5">
        <p>Have an account ?</p>
      <Link to='/signin'>  <span className='text-blue-500'>sign in</span></Link>
      </div>
      <p className='text-red-600'>{error && "something went wrong"}</p>
    </div>
  )
} 

export default SignUp