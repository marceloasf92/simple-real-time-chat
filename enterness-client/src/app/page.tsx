"use client";
import { Header } from "@/components/header/Header";
import { Main } from "./home.styles";
import { Join } from "@/components/join/Join";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

interface RootStateUser {
  user: { name: string };
}

export default function Home() {
  const router = useRouter();
  const storedUser = useSelector((state: RootStateUser) => state.user.name);

  useEffect(() => {

   if (storedUser) {
      router.push("/chat");
    }
    

  }, [storedUser]);

  

  return (
    <Main>
      <Header />
      <Join />
    </Main>
  );
}
