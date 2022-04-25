import React from 'react'
import ReactDOM from 'react-dom/client'
/* ---------------------- COMPONENTS ----------------------*/
import Home from './Pages/home'

/* ---------------------- STYLES ----------------------*/
import './styles/global.css'
import 'bootstrap/dist/css/bootstrap.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)
