import React from 'react'
import {Link} from "react-router-dom"

function SignUp() {
  return (
    <div className='max-w-lg p-3 mx-auto'>
      <h1 className='text-3xl text-center my-7 font-semibold'>sign up</h1>
      <form className='flex flex-col  gap-4 '>
        <input type="text" placeholder='Username' id='username' className='bg-slate-300 p-3 rounded-lg ' />
        <input type="email" placeholder='Email' id='email' className='bg-slate-300 p-3 rounded-lg ' />
        <input type="password" placeholder='Password' id='password' className='bg-slate-300 p-3 rounded-lg ' />
        <button  className='bg-slate-700 p-3 rounded-lg hover:opacity-95 disabled:opacity-80'>sign up</button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account ?</p>
      <Link to='/signin'>  <span className='text-blue-500'>sign in</span></Link>
      </div>
    </div>
  )
} 

export default SignUp