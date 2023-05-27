import '../estilos/cadastro.css'

// TODO Preparar os campos para os dados que serão inseridos (máscara no campo dataDeNascimento, filtro e verificação)
// TODO Definir ação do formulário

import CampoTexto from './CampoTexto';

function FormUsuario() {
  return (
    <>
      <form action="" method="" className="formulario">
        <h2 className="titulo">Cadastrar</h2>

        <div className="grupo_campo">
          <CampoTexto name="nome" label='Nome*' required/>
          <CampoTexto name="cpf" label='Cpf*' required/>
        </div>

        <div className="grupo_campo">
          <CampoTexto name="dataDeNascimento" label='Data de Nascimento*' required/>
          <CampoTexto name="celular" label='Celular*' required/>
        </div>

        <div className="grupo_campo">
          <CampoTexto name="email" label='Email*' required/>
        </div>

        <div className="grupo_campo">
          <CampoTexto name='senha' label='Senha*' pwd required/>
          <CampoTexto name='confirmacaosenha' label='Confirme sua senha*' pwd required/>
        </div>

        <div className="grupo_campo">
          <CampoTexto name='cep' label='Cep*' required/>
          <CampoTexto name='estado' label='Estado*' required/>
          <CampoTexto name='cidade' label='Cidade*' required/>
        </div>

        <div className="grupo_campo">
          <CampoTexto name='bairro' label='Bairro*' required/>
          <CampoTexto name='rua' label='Rua*' required/>
          <CampoTexto name='numero' label='Número*' required/>
        </div>

        <div className="button-box">
          <button type="submit" id="botaoCadastrar">Enviar</button>
        </div>
      </form>
    </>
  );
}

export default FormUsuario;