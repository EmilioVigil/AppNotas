import { Route, Routes } from 'react-router-dom'

// Components
import { Login } from './components/login/Login'
import { Home } from './components/home/Home'
export function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  )
}

