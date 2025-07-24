import React from 'react'
import './App.css'
import {Routes, Route } from 'react-route-dom'
import Login from  './Pages/Login'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
