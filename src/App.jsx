import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import Createpage from './pages/createpage/Createpage'
import Homepage from './pages/homepage/Homepage'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<AppLayout />}>
                <Route index element={<Homepage />} />
                <Route path='create' element={<Createpage />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
