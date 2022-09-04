import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import Posts from './pages/posts'
import Profile from './pages/profile'
import SignIn from './pages/signin'
import SignUp from './pages/signup'

function App() {
  return <Router>
            <Routes>
              <Route path='/posts' element={<Posts />}></Route>
              <Route path='/signup' element={<SignUp />}></Route>
              <Route path='/signin' element={<SignIn />}></Route>
              <Route path='/profile/:id' element={<Profile />}></Route>
              <Route path="*" element={<Navigate to={"/posts"}/>}></Route>
            </Routes>
        </Router>
}

export default App
