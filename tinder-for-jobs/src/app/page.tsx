// export default function Home() {
//   return (
//     <main className="flex h-screen items-center justify-center bg-gray-500">
//       <h1 className="text-4xl font-bold text-black">
//         Tinder for Jobs 🚀
//       </h1>
//     </main>
//   );
// }
import HomePageClientComponent from "@/components/Home";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { isAuthenticated, getUser } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect(
      "/api/auth/login?post_login_redirect_url=http://localhost:3000/profile/create"
    );
  }

  const user = await getUser();

  if (!user) {
    redirect(
      "/api/auth/login?post_login_redirect_url=http://localhost:3000/profile/create"
    );
  }

//   const userWithNoConnection = await getUserWithNoConnection(user.id);

// const currentUser = await getUserById(user.id);
  return (
    <main className="flex h-screen items-center justify-center">

      {/* <HomePageClientComponent currentUser={currentUser} /> */}
      <h1 className="text-3xl font-semibold">
        Hi {user.given_name}, you are logged in!
      </h1>
    </main>
  );
}
