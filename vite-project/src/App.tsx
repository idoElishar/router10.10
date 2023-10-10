import React from 'react'
import './App.css'
import router from './comp/Router1'
import { RouterProvider } from 'react-router-dom'
function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
