import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import SupForm from './components/SupForm'
import { useState } from 'react'

function App() {

  const [listSup, setListSups] = useState([])

  return (
    <>
      <header>
        <h1>Bienvenido a la Liga de Superhéroes</h1>
      </header>
      <main>
        < SupForm listSup={listSup} setListSups={setListSups}/>
      </main>
      <footer>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>Name</th>
              <th>LastName</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {listSup.map((sup, index)=>
            <tr>
              <td>{sup.name}</td>
              <td>{sup.lastname}</td>
              <td>{sup.email}</td>
            </tr>)}
          </tbody>
        </table>
      </footer>
    </>
  )
}

export default App
