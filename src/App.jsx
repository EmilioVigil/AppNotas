import { Routes, Route } from 'react-router-dom'
// Components
import { LoginScreen } from './components/LoginScreen/LoginScreen'
import { Home } from './components/home/Home'
import { CreateNote } from './components/createNote/CreateNote'
import { Login } from './components/login/Login'
import { SignUp } from './components/signUp/SignUp'
export function App() {

  return (
    <>
      <Routes>

        <Route
          path='/'
          element={< LoginScreen />}
        />

        <Route
          path='/login'
          element={<Login />}
        />

        <Route
          path='/singup'
          element={<SignUp />}
        />

        <Route
          path='/home'
          element={<Home />}
        />

        <Route
          path='/createNote'
          element={<CreateNote />}
        />
      </Routes>
    </>
  )
}

