import { io } from "socket.io-client";
import { v4 as uuid } from "uuid";

const sessionId = uuid();

export const socket = io("http://localhost:3001", {
  query: { sessionId },
});
