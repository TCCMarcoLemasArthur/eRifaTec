//import {Client} from  = require('pg');
import Usuario from "../modelo/Usuario";
const pool = require('./conectaBD'); 

/* 
    TODO exportar uma function do conectaBD e
    TODO importar como modulo Ex: import { funcao } from './conectaBD'
*/


export async function cadastrarUsuario(){
    const nomeUsuario = (document.getElementById("nome") as HTMLInputElement)?.value;
    const cpfUsuario = (document.getElementById("cpf") as HTMLInputElement)?.value;
    const emailUsuario = (document.getElementById("email") as HTMLInputElement)?.value;
    const senhaUsuario = (document.getElementById("senha") as HTMLInputElement)?.value;
    const dataDeNascimentoUsuario = (document.getElementById("dataDeNascimento") as HTMLInputElement)?.value;
    const cepUsuario = (document.getElementById("cep") as HTMLInputElement)?.value;
    const cidadeUsuario = (document.getElementById("cidade") as HTMLInputElement)?.value;
    const estadoUsuario = (document.getElementById("estado") as HTMLInputElement)?.value;
    const bairroUsuario = (document.getElementById("bairro") as HTMLInputElement)?.value;
    const ruaUsuario = (document.getElementById("rua") as HTMLInputElement)?.value;
    const numeroUsuario = (document.getElementById("numero") as HTMLInputElement)?.value;
    const celularUsuario = (document.getElementById("celular") as HTMLInputElement)?.value;

    const usuario = new Usuario();
    // *mesma coisa que usuario.setNomeDoAtributo(nomeDaVariavel)
    usuario.nome = nomeUsuario;
    usuario.cpf = cpfUsuario;
    usuario.email = emailUsuario;
    usuario.senha = senhaUsuario;
    usuario.dataDeNascimento = new Date(dataDeNascimentoUsuario);
    usuario.cep = cepUsuario;
    usuario.estado = estadoUsuario;
    usuario.cidade = cidadeUsuario;
    usuario.bairro = bairroUsuario;
    usuario.rua = ruaUsuario;
    usuario.numero = numeroUsuario;
    usuario.celular = celularUsuario;

    const client = await pool.connect();

    const query = 'insert into Usuario values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)';

    // *mesma coisa que usuario.getNomeDoAtributo()
    const values1 = [usuario.nome, usuario.cpf, usuario.email, usuario.senha, usuario.dataDeNascimento, usuario.cep, usuario.cidade, usuario.rua, usuario.estado, usuario.bairro, usuario.numero, usuario.celular];
    
    await client.query(query, values1);

    // Execute a query de inserção no banco de dados aqui
    return true;
}

/*function VerificaCamposCadastro(): false | 1 {

    if (isNullorWhiteSpace(nomeUsuario)) {
        alert("Preencha o campo NOME");
        return false;
    }
    else if (isNullorWhiteSpace(emailUsuario)) {
        alert("Preencha o campo EMAIL");
        return false;
    }
    else if (isNullorWhiteSpace(senhaUsuario)) {
        alert("Preencha o campo SENHA");
        return false;
    }
    else if (isNullorWhiteSpace(cpfUsuario)) {
        alert("Preencha o campo CPF");
        return false;
    }
    else if (isNullorWhiteSpace(dataDeNascimentoUsuario)) {
        alert("Preencha o campo DATA DE NASCIMENTO");
        return false;
    }
    else if (isNullorWhiteSpace(cepUsuario)) {
        alert("Preencha o campo CEP");
        return false;
    }
    else if (isNullorWhiteSpace(estadoUsuario)) {
        alert("Preencha o campo ESTADO");
        return false;
    }
    else if (isNullorWhiteSpace(cidadeUsuario)) {
        alert("Preencha o campo CIDADE");
        return false;
    }
    else if (isNullorWhiteSpace(bairroUsuario)) {
        alert("Preencha o campo BAIRRO");
        return false;
    }
    else if (isNullorWhiteSpace(ruaUsuario)) {
        alert("Preencha o campo RUA");
        return false;
    }
    else if (isNullorWhiteSpace(numeroUsuario)) {
        alert("Preencha o campo NÚMERO");
        return false;
    }
    else if (isNullorWhiteSpace(celularUsuario)) {
        alert("Preencha o campo CELULAR");
        return false;
    }

    return 1;
}

//função para validar campo, se é Nula ou só tem Espaço em Branco. 
//(trim é usado para remover espaço em branco no início e no final de uma variável)
function isNullorWhiteSpace(value: string): boolean {
    return value === null || value.trim() === '';
}

function LimparCamposCadastro() {
    nomeUsuario = "";
}

*/
