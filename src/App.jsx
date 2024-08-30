import { Route,Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './component/Navbar'
import { Beranda, Tentang, Program, Pendaftaran, Kontak } from './component/pages/Navbar'

function App() {
  return (
    <>
    <div className='App'>
      <Navbar />
      <Routes>
      <Route path="/" element={<Beranda />} />
      <Route path="/tentang" element={<Tentang />} />
      <Route path="/program" element={<Program />} />
      <Route path="/pendaftaran" element={<Pendaftaran />} />
      <Route path="/kontak" element={<Kontak />} />
      </Routes>
    </div>
    </>
  )
}

export default App
