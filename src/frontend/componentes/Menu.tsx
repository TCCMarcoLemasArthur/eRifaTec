import React from "react";
import { Link } from "react-router-dom";
import '../estilos/menu.css'

import user from '../imagens/user.png'

const openMenu = () => {
    document.body.classList.add("open")
}

const closeMenu = () => {
    document.body.classList.remove("open")
}

export default function Menu() {
    return (
        <>
            <button className="burger" onClick={openMenu}>
                <i className="fa-solid fa-bars"></i>
            </button>
            <div className="overlay"></div>
            <aside className="menu">
                <div className="user-info">
                    <figure>
                        <img src={user} alt="foto pequena do usuário" />
                    </figure>
                    <h4>Visitante</h4>
                    <button className="close-btn" onClick={closeMenu}>
                        <i className="fa-solid fa-close"></i>
                    </button>
                </div>
                <div className="menu-links">
                    <Link to={"#"}><i className="fa-solid fa-user"></i>Minha conta</Link>
                    <Link to={"#"}><i className="fa-solid fa-clock-rotate-left"></i>Histórico de rifas</Link>
                    <Link to={"#"}><i className="fa-solid fa-trophy"></i>Meus prêmios</Link>
                    <h3>Gerenciar rifas</h3>
                    <Link to={"/criar_rifa"}><i className="fa-solid fa-ticket"></i>Criar rifa</Link>
                    <Link to={"#"}><i className="fa-solid fa-table-columns"></i>Painel de rifas</Link>
                    <Link to={"#"}><i className="fa-solid fa-list"></i>Listar prêmios</Link>
                    <h3>Suporte</h3>
                    <Link to={"#"}><i className="fa-solid fa-circle-question"></i>Dúvidas</Link>
                    <Link to={"#"}><i className="fa-solid fa-headset"></i>Central de atendimento</Link>
                </div>
                <div className="menu-buttons">
                    <button onClick={closeMenu}><Link to={"/login"}>Login</Link></button>
                    <button onClick={closeMenu}><Link to={"/cadastrar"}>Cadastrar</Link></button>
                </div>
            </aside>
        </>
        
    );
}