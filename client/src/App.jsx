import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Profile from '../src/pages/Profile'
import SignIn from  '../src/pages/SignIn'
import SignUp from '../src/pages/SignUp'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/signup' element={<SignUp/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App