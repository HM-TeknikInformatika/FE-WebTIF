import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './component/Navbar';
import { Beranda, Tentang, Program, Pendaftaran, Kontak } from './component/pages/Navbar';
import { StructurePage } from './component/pages/struktur/StructurePage';

function App() {
    return (
        <div className='App'>
            <Navbar />
            <main> {/* Menggunakan elemen main untuk konten utama */}
                <Routes>
                    <Route path="/" element={<Beranda />} />
                    <Route path="/tentang" element={<Tentang />} />
                    <Route path="/program" element={<Program />} />
                    <Route path="/pendaftaran" element={<Pendaftaran />} />
                    <Route path="/kontak" element={<Kontak />} />
                    <Route path="/structurepage" element={<StructurePage />} /> {/* Route untuk StructurePage */}
                </Routes>
            </main>
        </div>
    );
}

export default App;
