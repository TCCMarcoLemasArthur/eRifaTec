import prismaClient from "../prisma/index.js";
import bcrypt from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
const { compare } = bcrypt
const { sign } = jsonwebtoken

// Interface
interface AuthRequest {
    email: string;
    senha: string;
}

// Service
class AuthUserService {
    async execute({ email, senha }: AuthRequest) {
        // Verificação de email cadastrado
        const user = await prismaClient.usuario.findFirst({
            where: {
                emailusuario: email
            }
        });
        if (!user) {
            throw new Error("Email ou senha incorreto");
        }

        const senhaMatch = await compare(senha, user.senhausuario);
        if (!senhaMatch) {
            throw new Error("Email ou senha incorreto");
        }

        const token = sign(
            {
                email: user.emailusuario,
                senha: user.senhausuario
            },
            process.env.JWT_SECRET as string, 
            {
                subject: user.idusuario.toString(),
                expiresIn: '30d'
            }
        );

        return{
            id: user.idusuario,
            email: user.emailusuario,
            senha: user.senhausuario,
            token: token
        } 
    }
}

export { AuthUserService };
