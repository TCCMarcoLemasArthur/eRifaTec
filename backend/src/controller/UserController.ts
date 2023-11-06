import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from "bcryptjs";

//Insert
export const criarUsuario = async (req: Request, res: Response, next: NextFunction) => {
  const {nome, cpf, email, senha, dataNasc, cep, estado, cidade, bairro, rua, numero, celular,} = req.body;
  const usuarioExiste = await prisma.usuario.findFirst({
    where: {
      emailusuario: String(email),
    },
  });

  if (usuarioExiste) {
    console.log("E-mail já cadastrado");
    res.status(500).json({ msg: "Email já cadastrado" });
    return;
  }

  try {
    const senhaHash = await bcrypt.hash(senha, 8);
    const usuario = await prisma.usuario.create({
      data: {
        nomeusuario: nome,
        cpfusuario: cpf,
        emailusuario: email,
        senhausuario: senhaHash,
        datanascusuario: dataNasc,
        cep: cep,
        estado: estado,
        cidade: cidade,
        bairro: bairro,
        rua: rua,
        numero: numero,
        celular: celular,
      },
    });
    res.status(201).json(usuario);
  } catch (error) {
    if (error instanceof Error) {
      // Verificar se 'error' é uma instância de 'Error'
      res.status(500).json({ msg: error.message });
    } 
  }
};

//Select * from Usuario
export const listarUsuario = async (req: Request, res: Response) => {
  try {
    const usuario = await prisma.usuario.findMany();
    res.status(200).json(usuario);
  } catch (error) {
    if (error instanceof Error) {
      // Verificar se 'error' é uma instância de 'Error'
      res.status(500).json({ msg: error.message });
    }
  }
};

//Select por Id
export const selecionarUsuarioPorId = async (req: Request, res: Response) =>{
  try {
    const usuario = await prisma.usuario.findUnique({
      where: {
        idusuario: Number(req.params.id)
      },
    })
    res.status(200).json(usuario)
  } catch (error) {
    if(error instanceof Error){
    res.status(500).json({msg: error.message})
    }
  }
}

//Select para um registro
export const loginUsuario = async (req: Request, res: Response) => {
  const { email, senha } = req.body;
  const senhaHash = await bcrypt.hash(senha, 8);
  const userId = req.params.id;
  try {
    const usuarioExiste = await prisma.usuario.findFirst({
      where: {
        emailusuario: String(email),
      },
    });

    if (!usuarioExiste) {
      console.log("E-mail não cadastrado");
    }

    const usuario = await prisma.usuario.findFirst({
      where: {
        emailusuario: String(email),
      },
      select: {
        emailusuario: true,
        senhausuario: true,
        idusuario: true,
      },
    });

    if (usuario?.senhausuario === senhaHash) {
      console.log("Login efetuado com sucesso");
    } else {
      console.log("Email ou senha incorretos");
    }
  } catch (error) {
    console.log("Algum erro nessa merda");
  }
};

//update usuario
export const atualizarUsuario = async (req: Request, res: Response) => {
  const {nome, cpf, email, senha, dataNasc, cep, estado, cidade, bairro, rua, numero, celular} = req.body;
  try {
    const usuario = await prisma.usuario.update({
      where: {
        idusuario: Number(req.params.id),
      },
      data: {
        nomeusuario: nome,
        cpfusuario: cpf,
        emailusuario: email,
        senhausuario: senha,
        datanascusuario: dataNasc,
        cep: cep,
        estado: estado,
        cidade: cidade,
        bairro: bairro,
        rua: rua,
        numero: numero,
        celular: celular,
      },
    });
    res.status(200).json(usuario);
  } catch (error) {
    if (error instanceof Error) {
      // Verificar se 'error' é uma instância de 'Error'
      res.status(500).json({ msg: error.message });
    }
  }
};

//delete usuario
export const deletarUsuario = async (req: Request, res: Response) => {
  try {
    const usuario = await prisma.usuario.delete({
      where: {
        idusuario: Number(req.query.id),
      },
    });
    res.status(200).json(usuario);
  } catch (error) {
    if (error instanceof Error) {
      // Verificar se 'error' é uma instância de 'Error'
      res.status(500).json({ msg: error.message });
    }
  }
};

// todo-- fazer essa bosta 
export const calcularIdade = async (req: Request, res: Response) =>{
  try {

    const datanascusuario = new Date(req.body.datanascusuario);
    const hoje = new Date();
    let idade = hoje.getFullYear() - datanascusuario.getFullYear();
    const mes = hoje.getMonth() - datanascusuario.getMonth();

    if(mes < 0 || (mes === 0 && hoje.getDate() < datanascusuario.getDate()))
    {
      idade--;
    }

    if(idade>=18)
    {
      return true
    } else{
      console.log("Para criar uma rifa é necessário ter 18 anos ou mais!")
      return false;
    }
  } catch (error) {
    console.error("Erro ao calcular idadade do usuário: ", error)
  }
} 


