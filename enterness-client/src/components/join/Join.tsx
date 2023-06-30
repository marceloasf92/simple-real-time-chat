"use client";
import { useEffect, useState } from "react";
import { setName } from "@/redux/features/user";
import { Container, Content, Form, Warning } from "./join.styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { socket } from "@/server/server";
import { useSelector } from "react-redux";
import { setShowButton } from "@/redux/features/button";
import { getMessages } from "@/services/connections";

type FormValues = {
  nickname: string;
};

interface RootState {
  user: { name: string; id: string };
}

type Message = {
  username?: string;
  id: string;
  message: string;
};

const Join = () => {
  const { register, handleSubmit, formState } = useForm<FormValues>();
  const { errors } = formState;
  const dispatch = useDispatch();
  const router = useRouter();
  const storedUser = useSelector((state: RootState) => state.user);
  const [showWarning, setShowWarning] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {

    const messages: Message[] = await getMessages();
    console.log(messages);
    
    if (data.nickname !== "") {
      sessionStorage.setItem("username", data.nickname);
      dispatch(setName(data.nickname));
      dispatch(setShowButton(true));
      socket.emit("message", {
        message: `Usuário entrou na sala`,
        id: '',
        username: '',
      });
      socket.emit("join", data.nickname);
      router.push("/chat");
    } else {
      setShowWarning(true);
    }
  };

  useEffect(() => {
    if (storedUser.name) {
      router.push("/chat");
    } else {
      router.push("/");
    }
  }, [storedUser]);

  return (
    <Container>
      <Content>
        <Form>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Digite seu apelido!"
              {...register("nickname", { required: true })}
              name="nickname"
            />
            {errors?.nickname && <Warning>Preencha o apelido!</Warning>}
            {showWarning && <Warning>Preencha o apelido!</Warning>}
            <button type="submit">Entrar</button>
          </form>
        </Form>
      </Content>
    </Container>
  );
};

export { Join };
