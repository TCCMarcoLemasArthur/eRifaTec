import prismaClient from "../prisma/index";

class DetailUserService{
    async execute(){
        return{ok:true}
    }
}
export {DetailUserService};