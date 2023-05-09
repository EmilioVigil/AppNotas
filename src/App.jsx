import { Routes, Route } from 'react-router-dom'
// Components
import { LoginScreen } from './components/LoginScreen/LoginScreen'
import { Home } from './components/home/Home'
import { CreateNote } from './components/createNote/CreateNote'
export function App() {

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={< LoginScreen />}
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

