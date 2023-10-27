import prismaClient from "../prisma/index.js";

class DetailUserService{
    async execute(){
        return{ok:true}
    }
}
export {DetailUserService};