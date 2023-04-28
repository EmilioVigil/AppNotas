import { Routes, Route } from 'react-router-dom'
// Components
import { Login } from './components/login/Login'
import { Home } from './components/home/Home'
import { CreateNote } from './components/createNote/CreateNote'
export function App() {

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Login />}
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

