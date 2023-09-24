import { useState } from "react";
import { FaBars, FaReact } from 'react-icons/fa6'
import Sidebar from './components/Sidebar'
import './App.scss'

const App = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleBar = () => setIsOpen(!isOpen);

  return (
    <>
      <div className={isOpen ? 'blurred' : null}>
        <button onClick={toggleBar} style={{ background: 'transparent', border: 'none', cursor: 'pointer', width: '2rem', height: '2rem' }}><FaBars style={{ width: '1.5rem', height: '1.5rem' }} /></button>
        <div style={{ textAlign: 'center', color: '#111' }}>
          <h1>Pagina principale</h1>
          <p>Benvenuto nella mia pagina web!</p>
          <p>Puoi trovare i collegamenti principali nel menù laterale.</p>
        </div>
      </div>

      <div className={isOpen ? 'made-with-react blurred' : 'made-with-react'} style={{ backgroundColor: '#111' }}>
        <span style={{ color: 'white' }}>Creato con <FaReact id='react-icon' /></span>
      </div>

      <Sidebar isOpen={isOpen} toggleBar={toggleBar} />
    </>
  )
}

export default App;