"use client";
import { Container, Content, Logo } from "./header.styles";
import logo from "../../../public/assets/en_color.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { resetUser } from "@/redux/features/user";
import { socket } from "@/server/server";
import { setShowButton } from "@/redux/features/button";
import { setMessage } from "@/redux/features/messages";


interface RootStateButton {
  button: { showButton: boolean };
}

interface RootStateUser {
  user: { name: string; id: string };
}

const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const storedButton = useSelector((state: RootStateButton) => state.button.showButton);
  const userLogued = useSelector((state: RootStateUser) => state.user);

  const handleLogout = () => {
    socket.emit("message", {
      message: `Usuário saiu na sala`,
      id: '',
      username: '',
    });
    dispatch(setShowButton(false));
    dispatch(resetUser());
    socket.emit("userLeft");
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('id')
    router.push("/");
  };

  return (
    <Container>
      <Content>
        <Logo>
          <Image src={logo} alt="EnterNess" />
          <p>Chat</p>
        </Logo>
        {storedButton && <button onClick={handleLogout}>Logout</button>}
      </Content>
    </Container>
  );
};

export { Header };
