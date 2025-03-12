import React from 'react'
import { useSelector } from 'react-redux'

function Profile() {
  const {currentUser} = useSelector((state)=> state.user)
  return (<>
  
    <div className='p-3 max-w-lg mx-auto'>
    <div className='text-center font-semibold text-3xl my-7'>Profile</div>
    <form className='flex flex-col gap-4'>
          <img className='h-24 w-24 self-center cursor-pointer rounded-full object-cover mt-2'
           src={currentUser.profilePicture} alt="" />
           <input defaultValue={currentUser.username} type="text" id='username' placeholder='Username'
           className='bg-slate-100 rounded-lg p-3 '
            />
             <input defaultValue={currentUser.email} type="email" id='email' placeholder='Email'
           className='bg-slate-100 rounded-lg p-3 '
            />
             <input type="password" id='password' placeholder='Password'
           className='bg-slate-100 rounded-lg p-3 '
            />
            <button className='bg-slate-700 p-3 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
              update</button>
              <div className='flex justify-between'>
                <span className='text-red-600'>delete account</span>
                <span className='text-red-600'>sign out</span>

              </div>
    </form>
    </div>
  </>
  )
}

export default Profile