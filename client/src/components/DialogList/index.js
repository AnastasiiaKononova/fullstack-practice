import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styles from "./DialogList.module.css";
import { getUserChats } from "../../api/index";
import ListItem from "./ListItem";
import { getUserChatsList } from "../../actions/actionCreators";

// При відкритті компонента робить запит за списком діалогів юзера

const DialogList = (props) => {
  // const [list, setList] = useState();

  // useEffect(() => {
  //   getUserChats().then((res) => {
  //     setList(res.data.data);
  //   });
  // }, []);

  useEffect(() => {
    props.getUserChatsList();
  }, []);

  const { chatList } = props;

  return (
    <section className={styles.list}>
      <header className={styles["list-header"]}>Chat List</header>
      {chatList &&
        chatList.map((chat) => <ListItem chat={chat} key={chat._id} />)}
    </section>
  );
};

const mapStateToProps = ({ chatList }) => ({ chatList });

const mapDispatchToProps = {
  getUserChatsList,
};

export default connect(mapStateToProps, mapDispatchToProps)(DialogList);

/*
 Переписати компоненту DialogList. При монтуванні вона має
відправити action в редьюсер. 
 Одночасно з тим з стору вона має отримувати інформацію 
про список чатів юзера
 
 */
