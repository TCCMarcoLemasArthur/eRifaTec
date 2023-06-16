class CadastroUsuario {
    public nomeUsuario: string;
    public cpfUsuario: string;
    public emailUsuario: string;
    public senhaUsuario: string;
    public dataNascUsuario: Date;
    public cepUsuario: string;
    public estadoUsuario: string;
    public cidadeUsuario: string;
    public bairroUsuario: string;
    public ruaUsuario: string;
    public numeroUsuario: string;
    public telefoneCliente: string;

    constructor (nomeUsuario:string, cpfUsuario:string, emailUsuario:string, senhaUsuario:string, dataNascUsuario:Date, cepUsuario:string,estadoUsuario:string,cidadeUsuario:string,bairroUsuario:string,ruaUsuario:string,numeroUsuario:string,telefoneCliente:string) {
        this.nomeUsuario = nomeUsuario;
        this.cpfUsuario

    }

    //Encapsulamento Nome
    public getNome(): string {
        return this.nomeUsuario;
    }

    public setNome(nomeUsuario: string): void {
        this.nomeUsuario = nomeUsuario;
    }

    //Encapsulamento Cpf
    public getCpf(): string {
        return this.cpfUsuario;
    }

    public setCpf(cpfUsuario: string): void {
        this.cpfUsuario = cpfUsuario;
    }

    //Encapsulamento Email
    public getEmail(): string {
        return this.emailUsuario;
    }

    public setEmail(emailUsuario: string): void {
        this.emailUsuario = emailUsuario;
    }

    //Encapsulamento Senha
    public getSenha(): string {
        return this.senhaUsuario;
    }

    public setSenha(senhaUsuario: string): void {
        this.senhaUsuario = senhaUsuario;
    }

    //Encapsulamento Data de Nascimento
    public getDataDeNascimento(): Date {
        return this.dataNascUsuario;
    }

    public setDataDeNascimento(dataNascUsuario: Date): void {
        this.dataNascUsuario = dataNascUsuario;
    }

    //Encapsulamento Cep
    public getCep(): string {
        return this.cepUsuario;
    }

    public setCep(cepUsuario: string): void {
        this.cepUsuario = cepUsuario;
    }

    //Encapsulamento Estado
    public getEstado(): string {
        return this.estadoUsuario;
    }

    public setEstado(estadoUsuario: string): void {
        this.estadoUsuario = estadoUsuario;
    }

    //Encapsulamento Cidade
    public getCidade(): string {
        return this.cidadeUsuario;
    }

    public setCidade(cidadeUsuario: string): void {
        this.cidadeUsuario = cidadeUsuario;
    }

    //Encapsulamento Bairro
    public getBairro(): string {
        return this.bairroUsuario;
    }

    public setBairro(bairroUsuario: string): void {
        this.bairroUsuario = bairroUsuario;
    }

    //Encapsulamento Rua
    public getRua(): string {
        return this.ruaUsuario;
    }

    public setRua(ruaUsuario: string): void {
        this.ruaUsuario = ruaUsuario;
    }

    //Encapsulamento Numero (casa)
    public getNumero(): string {
        return this.numeroUsuario;
    }

    public setNumero(numeroUsuario: string): void {
        this.numeroUsuario = numeroUsuario;
    }

    //Encapsulamento Celular
    public getCelular(): string {
        return this.telefoneCliente;
    }

    public setCelular(telefoneCliente: string): void {
        this.telefoneCliente = telefoneCliente;
    }
}