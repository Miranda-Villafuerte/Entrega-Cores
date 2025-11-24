import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import ArtPiece from './components/ArtPiece'


function App() {
  const galeryList = [
    {name:'Fuera de este mundo', author: 'Kevin J', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEikIhL-Li7CW41ap4sHwbBLuHeBn9y3e5VuVZxBOitJ4-lUInsleN1CxSNdOeMGbONXkKx8oeyV7lOWBycRKki7c9W0WClXR493_Xgkj0BTC5pQmniLpkdINNeE1EWqOO2Ro3q5PSTclI8/s1600/Third-cave-project.jpg'},
    {name:'Pacientes holograficos', author: 'Kevin J', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEikIhL-Li7CW41ap4sHwbBLuHeBn9y3e5VuVZxBOitJ4-lUInsleN1CxSNdOeMGbONXkKx8oeyV7lOWBycRKki7c9W0WClXR493_Xgkj0BTC5pQmniLpkdINNeE1EWqOO2Ro3q5PSTclI8/s1600/Third-cave-project.jpg'},
    {name:'Lo alto del dinero', author: 'Kevin J', img: 'https://www.lavanguardia.com/files/og_thumbnail/uploads/2023/04/12/6437054269c02.jpeg'},
    {name:'Nada como la privacidad del hogar', author: 'Kevin J', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEikIhL-Li7CW41ap4sHwbBLuHeBn9y3e5VuVZxBOitJ4-lUInsleN1CxSNdOeMGbONXkKx8oeyV7lOWBycRKki7c9W0WClXR493_Xgkj0BTC5pQmniLpkdINNeE1EWqOO2Ro3q5PSTclI8/s1600/Third-cave-project.jpg'},
    {name:'Moverse en la ciudad', author: 'Kevin J', img: 'https://images.joseartgallery.com/28696/conversions/cityscapes-painting-night-city-thumb900.jpg'},
    {name:'Diversion de otro planeta', author: 'Kevin J', img: 'https://medias.artmajeur.com/hd/14220503_20210516-152143-1.jpg?v=1739129099'},
    {name:'Espectáculo de la galaxia', author: 'Kevin J', img: 'https://i.pinimg.com/originals/3d/05/a2/3d05a2ba682412001c20871892451e11.jpg'},
    {name:'Taxistas', author: 'Kevin J', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEikIhL-Li7CW41ap4sHwbBLuHeBn9y3e5VuVZxBOitJ4-lUInsleN1CxSNdOeMGbONXkKx8oeyV7lOWBycRKki7c9W0WClXR493_Xgkj0BTC5pQmniLpkdINNeE1EWqOO2Ro3q5PSTclI8/s1600/Third-cave-project.jpg'},

  ]

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to="home"/>}></Route>
        <Route path='/home' element={<Home galeryList={galeryList}/>}></Route>
        <Route path='/art/:id' element={<ArtPiece galeryList={galeryList}/>}></Route>
      </Routes>
    </>
  )
}

export default App
