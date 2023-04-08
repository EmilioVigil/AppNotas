import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// RUTAS
import { App } from './App'
// Empezamos con el enrutamiento de nuestr app
import {
  BrowserRouter
} from 'react-router-dom'




ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
