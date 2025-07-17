
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/header'
import Profile from './components/profile/Profile'
import SignupPage from './authPages/signup/signup'
import LoginPage from './authPages/login/login'
import MainLayout from './components/Header/mainlayout'
import PostPage from './pages/Post'
import PostContentDetailsPage from './pages/postcontent-details'

function App() {

  return (
    <div>

      <Routes>

        <Route path='/' element={<MainLayout />}>
          <Route path='profile' element={<Profile />} />
          <Route path='create-post' element={<PostPage />} />
          <Route path='/:id' element={<PostContentDetailsPage/>} />

        </Route>

        <Route>
          <Route path='/signup' element={<SignupPage/>} />
          <Route path='/login' element={<LoginPage/>} />
        </Route>
      </Routes>




    </div>
  )
}

export default App
