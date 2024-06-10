import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllComponents from './AllComponents'

function App() {

  return (
    <>
       <BrowserRouter>
          <Routes>
            <Route path='/home' element={<AllComponents />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
