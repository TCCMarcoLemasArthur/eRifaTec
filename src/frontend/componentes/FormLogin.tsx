import "../estilos/login.css";
import CampoTexto from "./CampoTexto";
import { Link } from 'react-router-dom'

// TODO Definir ação do formulário
// TODO Criar verificacao


export default function FormLogin() {
    return (
        <>
          <form action="" method="" className="loginForm">
            <h2 className="titulo">Login</h2>

            <CampoTexto name="emailLogin" label="Email" required/>
            <CampoTexto name="senhaLogin" label="Senha" pwd required/>

            <div className="button-box">
              <button type="submit" id="botaoLogin">
                Entrar
              </button>
              <p>Ainda não possui uma conta? <Link to={'/cadastrar'}>Cadastre-se</Link></p>
            </div>
          </form>
        </>
    );
}