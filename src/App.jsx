import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <nav>
        <Link to="/yt-senti-02/">Home</Link>
        <Link to="/yt-senti-02/about">About</Link>
      </nav>

      
      <Outlet />
    </>
  )
}

export default App
