import React from "react";
import styles from "./ModalWindow.module.css";

const ModalWindow = () => {
  return (
    <section className={styles["back-wrapper"]}>
      <article className={styles["modal-window"]}>ModalWindow</article>
    </section>
  );
};

export default ModalWindow;


/*
ModalWindow має містити форму для створення нового чату. Кнопку відправки, яка відправляє action, той через сагу відправляє запит на api

*/