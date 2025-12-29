import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

// import { prisma } from "./prismaClient";
import { getUserById } from "./users";

export async function getCurrentUser(){
//get server side session
const session = await getKindeServerSession();
//if no session no user
const userId = (await session?.getUser())?.id;
if(!userId)
    return null;

const currentUser = await getUserById(userId);
return {session,currentUser};

}

// src/lib/session.ts  (server)
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "./prisma"; // your existing prisma singleton

export type CurrentUserResult = {
  session: any | null;         // raw Kinde session object (shape depends on Kinde)
  currentUser: any | null;     // your DB user (Prisma result), may include profile relation
};

export async function getCurrentUser(): Promise<CurrentUserResult | null> {
  // getKindeServerSession returns helpers to check auth and read user info (server-side)
  const { isAuthenticated, getUser } = getKindeServerSession();

  // quick check: not logged in -> return null (caller will redirect to login)
  if (!(await isAuthenticated())) return null;

  // get the Kinde user profile (contains the id from the auth provider)
  const kindeUser = await getUser();
  const userId = kindeUser?.id ?? kindeUser?.sub ?? null;
  if (!userId) return { session: kindeUser, currentUser: null };

  // fetch application-level user from DB, include profile relation if you have one
  const currentUser = await prisma.user.findUnique({
    where: { id: userId },
    include: { profile: true }, // adjust to your Prisma schema
  });

  return { session: kindeUser, currentUser };
}
