import '../estilos/formusuario.css';
import CampoTexto from './CampoTexto';
import { cadastrarUsuario } from '../../backend/controle/cadastraUsuario';
import { Link } from 'react-router-dom'

// TODO Preparar os campos para os dados que serão inseridos (máscara no campo dataDeNascimento, filtro e verificação)

//* A propriedade cadastro é requerida para identificação
//* cadastro = true -> Formulário para cadastro
//* cadastro = false -> Formulário para atualizar dados
interface Props {
    cadastro: boolean;
}

const handleCadastrar = (event: React.FormEvent) => {
  // Impede a página de recarregar quando clicar no botão
  event.preventDefault();
  // Todo implementar metodo de cadastro
}

const handleAtualizar = (event: React.FormEvent) => {
  event.preventDefault();
  // TODO implementar método de atualização
}

function FormUsuario({cadastro}: Props) {
  return (
    <>
      <form onSubmit={cadastro ? handleCadastrar : handleAtualizar} className="formUsuario">
        <h2 className="titulo">{cadastro ? "Cadastro" : "Meus dados"}</h2>

        <div className="grupo-campo">
          <CampoTexto name="nome" label='Nome*' required/>
          <CampoTexto name="cpf" label='Cpf*' required/>
        </div>

        <div className="grupo-campo">
          <CampoTexto name="dataDeNascimento" label='Data de Nascimento*' required/>
          <CampoTexto name="celular" label='Celular*' required/>
        </div>

        <div className="grupo-campo">
          <CampoTexto name="email" label='Email*' required/>
        </div>

        <div className="grupo-campo">
          <CampoTexto name='senha' label='Senha*' pwd required/>
          <CampoTexto name='confirmacaosenha' label='Confirme sua senha*' pwd required/>
        </div>

        <div className="grupo-campo">
          <CampoTexto name='cep' label='Cep*' required/>
          <CampoTexto name='estado' label='Estado*' required/>
          <CampoTexto name='cidade' label='Cidade*' required/>
        </div>

        <div className="grupo-campo">
          <CampoTexto name='bairro' label='Bairro*' required/>
          <CampoTexto name='rua' label='Rua*' required/>
          <CampoTexto name='numero' label='Número*' required/>
        </div>

        <div className="button-box">
          <button type="submit" id={cadastro ? "btnCadastrar" : "btnAtualizar"}>
            Enviar
          </button>
          {cadastro ? <p>Já possui uma conta? <Link to={'/login'}>Entrar</Link></p> : ""}
        </div>
      </form>
    </>
  );
}

export default FormUsuario;