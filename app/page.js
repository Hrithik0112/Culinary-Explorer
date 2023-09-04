"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import CategoryList from "./components/Home/CategoryList";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!session?.user) {
      router.push("/Login");
    }
  }, [session]);
  return (
    <div className="grid grid-cols-4 h-screen">
      {/* <h1>Lets begin the Project.</h1>
      <button onClick={() => signOut()}>Sign Out</button> */}
      <div className="first p-3">
        <CategoryList />
      </div>
      <div className="bg-blue-200 col-span-3">Second</div>
    </div>
  );
}
