"use client";
import { useState, useEffect } from "react";
import { Chat } from "@/components/chat/Chat";
import { Main } from "./chat.styles";
import { Header } from "@/components/header/Header";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

interface RootState {
  user: { name: string };
}

type Message = {
  username: string;
  message: string;
};

export default function Home() {
  const router = useRouter();
  const storedUser = useSelector((state: RootState) => state.user.name);

  useEffect(() => {
    if (!storedUser) {
      router.push("/");
    }
  }, [storedUser]);

  return (
    <Main>
      <Header />
      <Chat />
    </Main>
  );
}
