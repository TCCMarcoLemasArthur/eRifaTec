class Usuario {
    private nomeUsuario: string;
    private cpfUsuario: string;
    private emailUsuario: string;
    private senhaUsuario: string;
    private dataNascUsuario: Date;
    private cepUsuario: string;
    private estadoUsuario: string;
    private cidadeUsuario: string;
    private bairroUsuario: string;
    private ruaUsuario: string;
    private numeroUsuario: string;
    private celularUsuario: string;

    // Inicializar os atributos
    constructor (nomeUsuario ="",
                 cpfUsuario ="", 
                 emailUsuario ="", 
                 senhaUsuario ="", 
                 dataNascUsuario = new Date('2023-06-16'), 
                 cepUsuario ="",
                 estadoUsuario ="",
                 cidadeUsuario ="",
                 bairroUsuario ="",
                 ruaUsuario ="",
                 numeroUsuario ="",
                 celularUsuario ="") {
        this.nomeUsuario = nomeUsuario;
        this.cpfUsuario = cpfUsuario;
        this.emailUsuario = emailUsuario;
        this.senhaUsuario = senhaUsuario;
        this.dataNascUsuario = dataNascUsuario;
        this.cepUsuario = cepUsuario;
        this.estadoUsuario = estadoUsuario;
        this.cidadeUsuario = cidadeUsuario;
        this.bairroUsuario = bairroUsuario;
        this.ruaUsuario = ruaUsuario;
        this.numeroUsuario = numeroUsuario;
        this.celularUsuario = celularUsuario;

    }

    //Encapsulamento Nome
    get nome(): string {
        return this.nomeUsuario;
    }

    set nome(nomeUsuario: string) {
        this.nomeUsuario = nomeUsuario;
    }

    //Encapsulamento Cpf
    get cpf(): string {
        return this.cpfUsuario;
    }

    set cpf(cpfUsuario: string) {
        this.cpfUsuario = cpfUsuario;
    }

    //Encapsulamento Email
    get email(): string {
        return this.emailUsuario;
    }

    set email(emailUsuario: string) {
        this.emailUsuario = emailUsuario;
    }

    //Encapsulamento Senha
    get senha(): string {
        return this.senhaUsuario;
    }

    set senha(senhaUsuario: string) {
        this.senhaUsuario = senhaUsuario;
    }

    //Encapsulamento Data de Nascimento
    get dataDeNascimento(): Date {
        return this.dataNascUsuario;
    }

    set dataDeNascimento(dataNascUsuario: Date) {
        this.dataNascUsuario = dataNascUsuario;
    }

    //Encapsulamento Cep
    get cep(): string {
        return this.cepUsuario;
    }

    set cep(cepUsuario: string) {
        this.cepUsuario = cepUsuario;
    }

    //Encapsulamento Estado
    get estado(): string {
        return this.estadoUsuario;
    }

    set estado(estadoUsuario: string) {
        this.estadoUsuario = estadoUsuario;
    }

    //Encapsulamento Cidade
    get cidade(): string {
        return this.cidadeUsuario;
    }

    set cidade(cidadeUsuario: string) {
        this.cidadeUsuario = cidadeUsuario;
    }

    //Encapsulamento Bairro
    get bairro(): string {
        return this.bairroUsuario;
    }

    set bairro(bairroUsuario: string) {
        this.bairroUsuario = bairroUsuario;
    }

    //Encapsulamento Rua
    get rua(): string {
        return this.ruaUsuario;
    }

    set rua(ruaUsuario: string) {
        this.ruaUsuario = ruaUsuario;
    }

    //Encapsulamento Numero (casa)
    get numero(): string {
        return this.numeroUsuario;
    }

    set numero(numeroUsuario: string) {
        this.numeroUsuario = numeroUsuario;
    }

    //Encapsulamento Celular
    get celular(): string {
        return this.celularUsuario;
    }

    set celular(celularUsuario: string) {
        this.celularUsuario = celularUsuario;
    }
}

export default Usuario