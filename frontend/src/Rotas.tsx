import React from 'react';
import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const Home = loadable(() => import('./paginas/Home'));
const CadastroUsuario = loadable(() => import('./paginas/CadastroUsuario'));
const LoginUsuario = loadable(() => import('./paginas/LoginUsuario'));
const CriarRifa = loadable(() => import('./paginas/CriarRifa'));
const NoPage = loadable(() => import('./paginas/nopage/NoPage'));
const ListarUsuarios = loadable(() => import('./paginas/ListarUsuarios'));
const PerfilUsuario = loadable(() => import('./paginas/PerfilUsuario'));

export default function Rotas() {
	return (
		<Routes>
			<Route path='/' index element={<Home />}/>
			<Route path='/login' element={<LoginUsuario />}/>
			<Route path='/cadastrar' element={<CadastroUsuario />}/>
			<Route path='/criar_rifa' element={<CriarRifa />}/>
			<Route path='/listar_usuarios' element={<ListarUsuarios />}/>
			<Route path='/user/:id' element={<PerfilUsuario />}/>
			<Route path='*' element={<NoPage />}/>
		</Routes>
	);
}