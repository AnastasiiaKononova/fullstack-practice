import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styles from "./DialogList.module.css";
import { getUserChats } from "../../api/index";
import ListItem from "./ListItem";
import { getUserChatList } from "../../actions/actionCreators";
import ModalWindow from "../ModalWindow";
// При відкритті компонента робить запит за списком діалогів юзера

const DialogList = (props) => {
 
  useEffect(() => {
    const result = props.getUserChatList();
    console.log(result);
  }, []);

  const { chatList } = props;

  return (
    <section className={styles.list}>
      <header className={styles["list-header"]}>Chat List</header>
      {chatList &&
        chatList.map((chat) => <ListItem chat={chat} key={chat._id} />)}
      <footer onClick={props.openModal} className = {styles.foot}>+ Add new chat</footer>
    </section>
  );
};

const mapStateToProps = ({ chatList }) => ({ chatList });

const mapDispatchToProps = {
  getUserChatList,
};

export default connect(mapStateToProps, mapDispatchToProps)(DialogList);

/*
 Переписати компоненту DialogList. При монтуванні вона має
відправити action в редьюсер. 
 Одночасно з тим з стору вона має отримувати інформацію 
про список чатів юзера
 
 */
