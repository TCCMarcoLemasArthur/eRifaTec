import Usuario from "../modelo/Usuario";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

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
    usuario.dataDeNascimento = dataDeNascimentoUsuario;
    usuario.cep = cepUsuario;
    usuario.estado = estadoUsuario;
    usuario.cidade = cidadeUsuario;
    usuario.bairro = bairroUsuario;
    usuario.rua = ruaUsuario;
    usuario.numero = numeroUsuario;
    usuario.celular = celularUsuario;

    await prisma.usuario.create({
        data: {
          nomeusuario: usuario.nome,
          cpfusuario: usuario.cpf,
          emailusuario: usuario.email,
          senhausuario: usuario.senha,
          datanascusuario: usuario.dataDeNascimento,
          cep: usuario.cep,
          estado: usuario.estado,
          cidade: usuario.cidade,
          bairro: usuario.bairro,
          rua: usuario.rua,
          numero: usuario.numero,
        },
      })
}