"use server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/dist/client/components/navigation";

export default async function CallbackPage(){

const{ isAuthenticated, getUser} = getKindeServerSession();

if(!(await isAuthenticated())){
    return redirect(
      "/api/auth/login?post_login_redirect_url=http://localhost:3000/callback"
    );

    const user = await getUser();

    if(!user){
        return redirect(
            "/api/auth/login?post_login_redirect_url=http://localhost:3000/callback"
          );

          //check f user is already logged in if not create a user

    }   

}}