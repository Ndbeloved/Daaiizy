import HomePage from '../Pages/Home/HomePage'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
