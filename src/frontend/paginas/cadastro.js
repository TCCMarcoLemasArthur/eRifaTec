const form = document.getElementById('form')
const nomeUsuario = document.getElementById("nome").value || null;
const cpfUsuario = document.getElementById("cpf").value || null;
const emailUsuario = document.getElementById("email").value || null;
const senhaUsuario = document.getElementById("senha").value || null;
const dataDeNascimentoUsuario = document.getElementById("dataDeNascimento").value || null;
const cepUsuario = document.getElementById("cep").value || null;
const estadoUsuario = document.getElementById("estado").value || null;
const cidadeUsuario = document.getElementById("cidade").value || null;
const bairroUsuario = document.getElementById("bairro").value || null;
const ruaUsuario = document.getElementById("rua").value || null;
const numeroUsuario = document.getElementById("numero").value || null;
const celularUsuario = document.getElementById("celular").value || null;
console.log(nome, email, senha, cpf, dataNascimento, endereco, telefone, celular);

function Cadastrar() {
    document.getElementById("btnCadastrar").addEventListener("click", cadastrarUsuario);
    alert("Você foi Cadastrado");
}

//Falta criar um evento click no botão, para que quando o usuário clicar, 
//os dados serem transmitidos para suas respectivas variáveis
//Falta Estabelecer a conexão com o banco de dados
//Falta dar o Insert(Inserir) os dados do usuário quando ele clicar no botão cadastar

//função para validar campo, se é Nula ou só tem Espaço em Branco. 
//(trim é usado para remover espaço em branco no início e no final de uma variável)
function isNullorWhiteSpace(input) {
    return input = null || !input.trim();
}

function VerificaCamposCadastro() {
    const nomeUsuarioValue = nomeUsuario.value
    const cpfUsuarioValue = cpfUsuario.value

    if (isNullorWhiteSpace(nomeUsuarioValue)) {
        alert("Preencha o campo NOME");
        return 0;
    }
    else if (isNullorWhiteSpace(emailUsuario)) {
        alert("Preencha o campo EMAIL");
        return 0;
    }
    else if (isNullorWhiteSpace(senhaUsuario)) {
        alert("Preencha o campo SENHA");
        return 0;
    }
    else if (isNullorWhiteSpace(cpfUsuario)) {
        alert("Preencha o campo CPF");
        return 0;
    }
    else if (isNullorWhiteSpace(dataDeNascimentoUsuario)) {
        alert("Preencha o campo DATA DE NASCIMENTO");
        return 0;
    }
    else if (isNullorWhiteSpace(cepUsuario)) {
        alert("Preencha o campo CEP");
        return 0;
    }
    else if (isNullorWhiteSpace(estadoUsuario)) {
        alert("Preencha o campo ESTADO");
        return 0;
    }
    else if (isNullorWhiteSpace(cidadeUsuario)) {
        alert("Preencha o campo CIDADE");
        return 0;
    }
    else if (isNullorWhiteSpace(bairroUsuario)) {
        alert("Preencha o campo BAIRRO");
        return 0;
    }
    else if (isNullorWhiteSpace(ruaUsuario)) {
        alert("Preencha o campo RUA");
        return 0;
    }
    else if (isNullorWhiteSpace(numeroUsuario)) {
        alert("Preencha o campo NÚMERO");
        return 0;
    }
    else if (isNullorWhiteSpace(celularUsuario)) {
        alert("Preencha o campo CELULAR");
        return 0;
    }

    return 1;

}

function LimparCamposCadastro() {

}




















        //#region Dados
/*var inputNome = document.querySelector("#nome");
var nomeUsuario = inputNome.value;

var inputCpf = document.querySelector("#cpf");
var cpfUsuario = inputCpf.value;

var inputEmail = document.querySelector("#email");
var emailUsuario = inputEmail.value;

var inputSenha = document.querySelector("#senha");
var senhaUsuario = inputSenha.value;

var inputDataNascimento = document.querySelector("#dataNascimento")
var dataDeNascimentoUsuario = inputDataNascimento.value;

var inputCep = document.querySelector("#cep");
var cepUsuario = inputCep.value;

var inputEstado = document.querySelector("#estado");
var estadoUsuario = inputEstado.value;

var inputCidade = document.querySelector("#cidade");
var cidadeUsuario = inputCidade.value;

var inputBairro = document.querySelector("#bairro");
var bairroUsuario = inputBairro.value;

var inputRua = document.querySelector("#rua");
var ruaUsuario = inputRua.value;

var inputNumero = document.querySelector("#numero");
var numeroUsuario = inputNumero.value;
*/
        //#endregion
