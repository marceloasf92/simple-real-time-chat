"use client";
import { useEffect } from "react";
import { Container, Content, Feed, Form } from "./chat.styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { setMessage } from "@/redux/features/messages";
import { useDispatch, useSelector } from "react-redux";
import { socket } from "@/server/server";
import { insertMessages } from "@/services/connections";

type Message = {
  username?: string;
  id: string;
  message: string;
};

type FormValues = {
  username?: string;
  message: string;
};

interface RootStateMessage {
  message: Message[];
}

interface RootStateUser {
  user: { name: string; id: string };
}

const Chat = () => {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const dispatch = useDispatch();
  const messageList = useSelector((state: RootStateMessage) => state.message);
  const userLogued = useSelector((state: RootStateUser) => state.user);

  useEffect(() => {
    socket.on("message", (messageList: Message) => {
      dispatch(setMessage(messageList));
    });

    return () => {
      socket.off("message");
    };
  }, [messageList]);

  useEffect(() => {
    const list = document.getElementById(`message${messageList.length - 1}`);

    if (list) {
      list.scrollIntoView({
        block: "end",
        inline: "nearest",
        behavior: "smooth",
      });
    }
  }, [messageList]);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {

    
    if (data.message != "") {

      const message = { message: data.message, id: userLogued.id, username: userLogued.name}
      const messages: Message = await insertMessages(message);
      sessionStorage.setItem("mensagens", JSON.stringify(messageList));
      socket.emit("message", message);
      reset();
    }
  };


  return (
    <Container>
      <Content>
        <Feed>
          <ul className="message-list">
            {messageList.map((message: Message, index: number) =>
              message.username ? (
                <>
                  <li
                    key={index + message.message.length}
                    id={"message" + index}
                    className={userLogued.id == message.id ? "moveRight" : ""}
                  >
                    {userLogued.id != message.id && (
                      <span className="nameUser">{message.username}:</span>
                    )}

                    <div>{message.message}</div>
                  </li>
                </>
              ) : (
                <>
                  <li
                    key={index + message.message.length}
                    id={"message" + index}
                  >
                    <div>{message.message}</div>
                  </li>
                </>
              )
            )}
          </ul>
        </Feed>
        <Form>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("message")} name="message" />
            <button type="submit">Send</button>
          </form>
        </Form>
      </Content>
    </Container>
  );
};

export { Chat };
