import "../estilos/login.css";

// TODO Definir ação do formulário
// TODO Criar verificacao

import CampoTexto from "./CampoTexto";

export default function FormLogin() {
    return (
        <>
          <form action="" method="" className="loginForm">
            <h2 className="titulo">Login</h2>

            <CampoTexto name="emailLogin" label="Email" required/>
            <CampoTexto name="senhaLogin" label="Senha" pwd required/>

            <div className="center">
              <button type="submit" id="botaoLogin">
                Entrar
              </button>
            </div>
          </form>
        </>
    );
}