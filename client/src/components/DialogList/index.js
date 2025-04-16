import React, { useEffect, useState } from "react";
import styles from "./DialogList.module.css";
import { getUserChats } from "../../api/index";
import ListItem from "./ListItem";

// При відкритті компонента робить запит за списком діалогів юзера

const DialogList = () => {
  const [list, setList] = useState();

  useEffect(() => {
    getUserChats().then((res) => {
      setList(res.data.data);
    });
  }, []);

  return (
    <section className={styles.list}>
      <header className={styles["list-header"]}>Chat List</header>
      {list && list.map((chat) => <ListItem chat={chat} key={chat._id} />)}
    </section>
  );
};

export default DialogList;
