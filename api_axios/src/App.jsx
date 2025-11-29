import { useState } from 'react'
import Imagen from './components/Imagen'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 

function App() {
  const [imagen, setImagen] = useState()
  return (
    <>
    <h1>Perritos</h1>
    <br />
    <img src={imagen} alt={imagen} height="300" className='border border-5 border-danger'/>
    <Imagen setImagen={setImagen}  />
    </>
  )
}

export default App