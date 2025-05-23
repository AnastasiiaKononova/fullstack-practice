// Сторінка чату
import React, { useState, useContext } from "react";
import { connect } from "react-redux";
import DialogList from "../../components/DialogList";
import Chat from "../../components/Chat";
import MessageArea from "../../components/MessageArea";
import styles from "./Dashboard.module.css";
import { addNewMessageRequest } from "../../actions/actionCreators";
import ModalWindow from "../../components/ModalWindow";

const Dashboard = (props) => {
  const [modalOpen, setModal] = useState(false);

  const modalHandler = () => {
    setModal(true);
  }
  return (
    <main className={styles["messenger-wrapper"]}>
      <DialogList openModal={setModal} />
      <section className={styles.container}>
        <Chat />
        <MessageArea/>
      </section>
      {modalOpen && <ModalWindow close={setModal}/>}
    </main>
  );
};

export default Dashboard;

