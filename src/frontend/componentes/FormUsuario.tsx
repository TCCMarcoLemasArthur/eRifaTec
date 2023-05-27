import '../estilos/cadastro.css';
import CampoTexto from './CampoTexto';

// TODO Preparar os campos para os dados que serão inseridos (máscara no campo dataDeNascimento, filtro e verificação)
// TODO Definir ação do formulário

//* A propriedade cadastro é requerida para identificação
//* cadastro = true -> Formulário para cadastro
//* cadastro = false -> Formulário para atualizar dados
interface Props {
    cadastro: boolean;
}

function FormUsuario({cadastro}: Props) {
  return (
    <>
      <form action="" method="" className="formUsuario">
        <h2 className="titulo">{cadastro ? "Cadastro" : "Meus dados"}</h2>

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

        <div className="center">
          <button type="submit" id={cadastro ? "btnCadastrar" : "btnAtualizar"}>
            Enviar
          </button>
        </div>
      </form>
    </>
  );
}

export default FormUsuario;