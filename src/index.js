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
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Poppins:wght@600;700&family=Roboto:wght@700&display=swap"
        rel="stylesheet"
      />
    </head>
    <Home />
  </React.StrictMode>
)
