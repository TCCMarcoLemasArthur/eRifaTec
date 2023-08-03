import React from 'react'
import "../estilos/header.css";
import logo from "../imagens/probleminha.jpg"
import Menu from './Menu';
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate();

  const loginPage = () => {
    navigate("/login")
  }
  
  return (
    <header className="headerbox">
      <div className="cabecalho">
        <Menu />
        <div className="logo">
          <h1>
            <img src={logo} alt="Logo" />
            <Link to={"/"}>eRifaTec</Link>
          </h1>
        </div>
        <div className="gap"></div>
        <nav className="navbar">
          <Link to={'/'}>Home</Link>
          <Link to={'/sobre'}>Sobre</Link>
          <Link to={'/ajuda'}>Ajuda</Link>
          <Link to={'/contatos'}>Contato</Link>
          <button className="btnLogin" onClick={loginPage}>Entrar</button>
        </nav>
      </div>
    </header>
  );
}