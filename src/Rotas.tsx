import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './frontend/paginas/Home';
import CadastroUsuario from './frontend/paginas/CadastroUsuario';
import LoginUsuario from './frontend/paginas/LoginUsuario';
import CriarRifa from './frontend/paginas/CriarRifa'
import NoPage from './frontend/paginas/NoPage';

export default function Rotas() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' index element={<Home />}/>
                    <Route path='/login' element={<LoginUsuario />}/>
                    <Route path='/cadastrar' element={<CadastroUsuario />}/>
                    <Route path='/criar_rifa' element={<CriarRifa />}/>
                    <Route path='*' element={<NoPage />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}