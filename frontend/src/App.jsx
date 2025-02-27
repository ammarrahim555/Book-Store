import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CreateBook from './pages/CreateBook'
import ShowBook from './pages/ShowBook'
import EditeBook from './pages/EditeBook'
import DeleteBook from './pages/DeleteBook'
import Home from './pages/Home'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBook />} />
      <Route path="/books/details/:id" element={<ShowBook />} />
      <Route path="/books/edit/:id" element={<EditeBook />} />
      <Route path="/books/Delete/:id" element={<DeleteBook />} />
    </Routes>
  )
}

export default App
