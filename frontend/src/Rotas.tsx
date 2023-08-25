import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import CadastroUsuario from './paginas/CadastroUsuario';
import LoginUsuario from './paginas/LoginUsuario';
import CriarRifa from './paginas/CriarRifa'
import NoPage from './paginas/NoPage';

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