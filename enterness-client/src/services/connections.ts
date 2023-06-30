import { api } from "./api";


interface Message {
  username: string;
  id: string;
  message: string;
}

export const getMessages = async (): Promise<any> => {
  const response = await api.get<any>("messages")
    .then((res) => {
      return res.data
    })
    .catch((err) => console.log(err.response.data));

  return response;
};

export const insertMessages = async (messageData:Message): Promise<any> => {
  const response = await api.post<any>("messages/insert", messageData)
    .then((res) => {
      return res.data
    })
    .catch((err) => console.log(err.response.data));

  return response;
};


