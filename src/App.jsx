import { Routes, Route } from "react-router-dom";
import React from 'react'
import { Home, About, Package, Contact } from "./pages";


export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/package" element={<Package/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </div>
  )
}
