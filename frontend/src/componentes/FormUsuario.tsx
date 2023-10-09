import React, { useState, useEffect } from 'react'
import '../estilos/formusuario.css';
import "../estilos/campotexto.css";
import CampoTexto from './CampoTexto';
import { Link } from 'react-router-dom'
import axios from 'axios'

// TODO Preparar os campos para os dados que serão inseridos (máscara no campo dataDeNascimento, filtro e verificação)

//* A propriedade cadastro é requerida para identificação
//* cadastro = true -> Formulário para cadastro
//* cadastro = false -> Formulário para atualizar dados
interface Props {
    cadastro: boolean;
}

function FormUsuario({cadastro}: Props) {
  const [userData, setUserData] = useState({
    nome: '',
    cpf: '',
    dataNasc: '',
    celular: '',
    email: '',
    senha: '',
    cep: '',
    estado: '',
    cidade: '',
    bairro: '',
    rua: '',
    numero: ''
  })

  const [response, setResponse] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

   //! Verificar a confirmação da senha, verificar campos e procurar uma alternativa ao useState

  const handleCadastrar = (event: React.FormEvent) => {
    // Impede a página de recarregar quando clicar no botão
    event.preventDefault();
    axios.post('http://localhost:5000/cadastrar', {
      nome: 'A',
      cpf: 'A',
      dataNasc: 'A',
      celular: 'A',
      email: 'A',
      senha: 'A',
      cep: 'A',
      estado: 'A',
      cidade: 'A',
      bairro: 'A',
      rua: 'A',
      numero: 'A'
    })
      .then(response => {
        console.log(response)
      })
      .catch(erro => {
        console.log('Erro ao fazer postagem', erro)
      })
  
  }
  
  const handleAtualizar = (event: React.FormEvent) => {
    event.preventDefault();
    // TODO implementar método de atualização
  }

  return (
    <>
      <form onSubmit={cadastro ? handleCadastrar : handleAtualizar} className="formUsuario">
        <h2 className="titulo">{cadastro ? "Cadastro" : "Meus dados"}</h2>

        <div className="grupo-campo">
          <div className="label-campo">
            <input
              type='text'
              name='nome'
              id='nome'
              value={userData.nome}
              required
              onChange={handleInputChange}
            />
            <label>Nome*</label>
          </div>
          <div className="label-campo">
            <input
              type='text'
              name='cpf'
              id='cpf'
              value={userData.cpf}
              required
              onChange={handleInputChange}
            />
            <label>cpf*</label>
          </div>
        </div>

        <div className="grupo-campo">
          <div className="label-campo">
              <input
                type='text'
                name='dataNasc'
                id='dataNasc'
                value={userData.dataNasc}
                required
                onChange={handleInputChange}
              />
              <label>dataNasc*</label>
            </div>
            <div className="label-campo">
              <input
                type='text'
                name='celular'
                id='celular'
                value={userData.celular}
                required
                onChange={handleInputChange}
              />
              <label>celular*</label>
            </div>
        </div>

        <div className="grupo-campo">
          <div className="label-campo">
            <input
              type='text'
              name='email'
              id='email'
              value={userData.email}
              required
              onChange={handleInputChange}
            />
            <label>email*</label>
          </div>
        </div>

        <div className="grupo-campo">
          <div className="label-campo">
            <input
              type='password'
              name='senha'
              id='senha'
              value={userData.senha}
              required
              onChange={handleInputChange}
            />
            <label>senha*</label>
          </div>
          <div className="label-campo">
            <input
              type='password'
              name='confirmacaosenha'
              id='confirmacaosenha'
              required
            />
            <label>confirmacaosenha*</label>
          </div>
        </div>

        <div className="grupo-campo">
        <div className="label-campo">
            <input
              type='text'
              name='cep'
              id='cep'
              value={userData.cep}
              required
              onChange={handleInputChange}
            />
            <label>cep*</label>
          </div>
          <div className="label-campo">
            <input
              type='text'
              name='estado'
              id='estado'
              value={userData.estado}
              required
              onChange={handleInputChange}
            />
            <label>estado*</label>
          </div>
          <div className="label-campo">
            <input
              type='text'
              name='cidade'
              id='cidade'
              value={userData.cidade}
              required
              onChange={handleInputChange}
            />
            <label>cidade*</label>
          </div>
        </div>

        <div className="grupo-campo">
        <div className="label-campo">
            <input
              type='text'
              name='bairro'
              id='bairro'
              value={userData.bairro}
              required
              onChange={handleInputChange}
            />
            <label>bairro*</label>
          </div>
          <div className="label-campo">
            <input
              type='text'
              name='rua'
              id='rua'
              value={userData.rua}
              required
              onChange={handleInputChange}
            />
            <label>rua*</label>
          </div>
          <div className="label-campo">
            <input
              type='text'
              name='numero'
              id='numero'
              value={userData.numero}
              required
              onChange={handleInputChange}
            />
            <label>numero*</label>
          </div>
        </div>

        <div className="button-box">
          <button type="submit" id={cadastro ? "btnCadastrar" : "btnAtualizar"}>
            Enviar
          </button>
          {cadastro ? <p><span style={{color: 'black'}}>Já possui uma conta? </span><Link to={'/login'}>Entrar</Link></p> : ""}
        </div>
      </form>
      <p>{response}</p>
    </>
  );
}

export default FormUsuario;