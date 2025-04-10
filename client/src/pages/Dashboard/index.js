// Сторінка чату

import React from "react";
import DialogList from "../../components/DialogList";
import Chat from "../../components/Chat";
import MessageArea from "../../components/MessageArea";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <main className={styles["messenger-wrapper"]}>
      <DialogList />
      <section className={styles.container}>
        <Chat />
        <MessageArea />
      </section>
    </main>
  );
};

export default Dashboard;
