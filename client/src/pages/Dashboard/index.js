// Сторінка чату

import React, { useState } from "react";
import DialogList from "../../components/DialogList";
import Chat from "../../components/Chat";
import MessageArea from "../../components/MessageArea";
import styles from "./Dashboard.module.css";
import ChatContext from "../../contexts/ChatContext";

const Dashboard = () => {
  const [currentChat, setCurrentChat] = useState();
  return (
    <ChatContext.Provider value={[currentChat, setCurrentChat]}>
      <main className={styles["messenger-wrapper"]}>
        <DialogList />
        <section className={styles.container}>
          <Chat />
          <MessageArea />
        </section>
      </main>
    </ChatContext.Provider>
  );
};

export default Dashboard;
