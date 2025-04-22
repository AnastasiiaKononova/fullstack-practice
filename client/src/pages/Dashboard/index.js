// Сторінка чату

import React, { useState, useContext} from "react";
import DialogList from "../../components/DialogList";
import Chat from "../../components/Chat";
import MessageArea from "../../components/MessageArea";
import styles from "./Dashboard.module.css";
import ChatContext from "../../contexts/ChatContext";
import { addNewMessage } from "../../api/index";
import UserContext from "../../contexts/UserContext";

const Dashboard = () => {
  const [currentChat, setCurrentChat] = useState();
  const user = useContext(UserContext);

  const sendNewMessage = (text) => {
    const apiObj = {
        chatId: currentChat?._id,
        message: {
            author: user._id,
            body: text
        }
    };
    addNewMessage(apiObj)
    .then(({data: {data}}) => {
        const chat = {
            ...currentChat,
            messages: [...currentChat.messages, data]
        };
        setCurrentChat(chat)
    })
}



/*
 
 MessageArea task
 
 1. Бек done
 2. Прописати запит на api для створення нового повідомлення
 3. Компонента MessageArea за відправки форми має передати Dashboard інфу, а той - робити запит на відправку повідомлення. Юзера беремо з контекста, chatId з іншого контексту (CurrentChat Context)
 4. Після повернення об'єкту з новим повідомленням (в разі успішного його додавання до БД), додати його до масиву повідомлень, який рендерить <Chat />
 
 */

 
  return (
    <ChatContext.Provider value={[currentChat, setCurrentChat]}>
      <main className={styles["messenger-wrapper"]}>
        <DialogList />
        <section className={styles.container}>
          <Chat />
          <MessageArea sendData={sendNewMessage} />
        </section>
      </main>
    </ChatContext.Provider>
  );
};

export default Dashboard;




