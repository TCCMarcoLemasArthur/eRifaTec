import "../estilos/header.css";
import logo from "../imagens/probleminha.jpg"

export default function Header() {
  return (
    <header className="headerbox">
      <div className="cabecalho">
        <div className="logo">
          <h1>
            <img src={logo} alt="Logo" />
            <a href="#">eRifaTec</a>
          </h1>
        </div>

        <nav className="navbar">
          <a href="#">Home</a>
          <a href="#">Sobre</a>
          <a href="#">Ajuda</a>
          <a href="#">Contato</a>
          <button className="btnLogin">Entrar</button>
        </nav>
      </div>
    </header>
  );
}