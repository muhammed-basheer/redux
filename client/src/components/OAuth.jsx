import React from 'react'
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {app} from '../firebase.js';
import {useDispatch} from 'react-redux'
import {signInSuccess} from '../redux/user/userSlice.js'
import {useNavigate} from  'react-router-dom'
function OAuth() {
  const navigate = useNavigate()
    const dispatch = useDispatch();
    const handleGoogleClick = async()=>{
        try {
          const provider = new GoogleAuthProvider();
          const auth = getAuth(app)
          const result = await signInWithPopup(auth,provider)
          // console.log("resut",result)
            const res = await fetch('/api/auth/google',{
              method:"POST",    
              headers:{
                'Content-Type' : 'application/json',
              },
              body:JSON.stringify({
                name : result.user.displayName,
                email: result.user.email,
                photo:result.user.photoURL
              })
            })
            const data = await res.json();
            // console.log("data",data)
            dispatch(signInSuccess(data))
            navigate('/')
        } catch (error) {
            console.log("couldn't connect with google",error)
        }
    }

  return (
    <button type='button' onClick={handleGoogleClick} className='bg-red-700 text-amber-50 rounded-lg p-3 uppercase hover:opacity-95'>Continue with google</button>
  )
}

export default OAuth