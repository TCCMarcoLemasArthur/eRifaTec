//import {Client} from  = require('pg');

const pool = require('./conectaBD');

class CadastroUsuario {
    public modeloNome: string;
    public modeloCpf: string;
    public modeloEmail: string;
    public modeloSenha: string;
    public modeloDataDeNascimento: Date;
    public modeloCep: string;
    public modeloEstado: string;
    public modeloCidade: string;
    public modeloBairro: string;
    public modeloRua: string;
    public modeloNumero: string;
    public modeloCelular: string;

    //Encapsulamento Nome
    public getNome(): string {
        return this.modeloNome;
    }

    public setNome(modeloNome: string): void {
        this.modeloNome = modeloNome;
    }

    //Encapsulamento Cpf
    public getCpf(): string {
        return this.modeloCpf;
    }

    public setCpf(modeloCpf: string): void {
        this.modeloCpf = modeloCpf;
    }

    //Encapsulamento Email
    public getEmail(): string {
        return this.modeloEmail;
    }

    public setEmail(modeloEmail: string): void {
        this.modeloEmail = modeloEmail;
    }

    //Encapsulamento Senha
    public getSenha(): string {
        return this.modeloSenha;
    }

    public setSenha(modeloSenha: string): void {
        this.modeloSenha = modeloSenha;
    }

    //Encapsulamento Data de Nascimento
    public getDataDeNascimento(): Date {
        return this.modeloDataDeNascimento;
    }

    public setDataDeNascimento(modeloDataDeNascimento: Date): void {
        this.modeloDataDeNascimento = modeloDataDeNascimento;
    }

    //Encapsulamento Cep
    public getCep(): string {
        return this.modeloCep;
    }

    public setCep(modeloCep: string): void {
        this.modeloCep = modeloCep;
    }

    //Encapsulamento Estado
    public getEstado(): string {
        return this.modeloEstado;
    }

    public setEstado(modeloEstado: string): void {
        this.modeloEstado = modeloEstado;
    }

    //Encapsulamento Cidade
    public getCidade(): string {
        return this.modeloCidade;
    }

    public setCidade(modeloCidade: string): void {
        this.modeloCidade = modeloCidade;
    }

    //Encapsulamento Bairro
    public getBairro(): string {
        return this.modeloBairro;
    }

    public setBairro(modeloBairro: string): void {
        this.modeloBairro = modeloBairro;
    }

    //Encapsulamento Rua
    public getRua(): string {
        return this.modeloRua;
    }

    public setRua(modeloRua: string): void {
        this.modeloRua = modeloRua;
    }

    //Encapsulamento Numero (casa)
    public getNumero(): string {
        return this.modeloNumero;
    }

    public setNumero(modeloNumero: string): void {
        this.modeloNumero = modeloNumero;
    }

    //Encapsulamento Celular
    public getCelular(): string {
        return this.modeloCelular;
    }

    public setCelular(modeloCelular: string): void {
        this.modeloCelular = modeloCelular;
    }
}

document.getElementById("botaoCadastrar")?.addEventListener("click", () => {
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

    const cadastro = new CadastroUsuario();
    cadastro.setNome(nomeUsuario);
    cadastro.setCpf(cpfUsuario);
    cadastro.setEmail(emailUsuario);
    cadastro.setSenha(senhaUsuario);
    cadastro.setDataDeNascimento(new Date(dataDeNascimentoUsuario));
    cadastro.setCep(cepUsuario);
    cadastro.setEstado(estadoUsuario);
    cadastro.setCidade(cidadeUsuario);
    cadastro.setBairro(bairroUsuario);
    cadastro.setRua(ruaUsuario);
    cadastro.setNumero(numeroUsuario);
    cadastro.setCelular(celularUsuario);


    cadastrarUsuario(cadastro);
});

async function cadastrarUsuario(cadastro: any){

    const client = await pool.connect();

    const query = 'insert into Usuario values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)';

    const values1 = [cadastro.setNome, cadastro.setCpf, cadastro.setEmail, cadastro.setSenha, cadastro.setDataDeNascimento, cadastro.setCep, cadastro.setCidade, cadastro.setRua, cadastro.setEstado, cadastro.setBairro, cadastro.setNumero];
    
    await client.query(query, values1);

    // Execute a query de inserção no banco de dados aqui
    return true; 
}

document.getElementById("botaoCadastrar")?.addEventListener("click", cadastrarUsuario);


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
