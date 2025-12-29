import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export async function getUserById(userId: string | undefined | null){
if(!userId){
  return null;
}
const user = await prisma.user.findUnique({
  where: {id: userId},  
});
return user;
return user;    
}