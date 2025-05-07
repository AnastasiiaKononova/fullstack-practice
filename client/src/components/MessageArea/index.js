import React, { useState } from "react";
import { connect } from "react-redux";
import styles from "./MessageArea.module.css";
import { addNewMessageRequest } from "../../actions/actionCreators";
import cx from "classnames";

// зчитувати нове повідомлення і відправляти його ДашБорду, а той - відправляти на сервер
const MessageArea = (props) => {
  const [text, setText] = useState("");
  const [image, setImage] = useState();
  const [drag, setDrag] = useState(false);
  // другий useState для вибору файла - зробити input керованим елементом

  const submitHandler = (e) => {
    e.preventDefault();
    // props.sendData(text);
    // відпрвляти action напряму звідси
    if (text || image) {
      const newMessageObject = {
        chatId: props.currentChat?._id,
        message: {
          author: props.user._id,
          body: text,
          image: image,
        },
      };
      props.addNewMessageRequest(newMessageObject);
      setText("");
    }
  };

  const changeHandler = ({ target: { value } }) => {
    setText(value);
  };

  const imageReader = (source) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      // ось тут ми можемо файлом ділитись
      setImage(reader.result);
      console.log(reader.result);
    };
    reader.readAsDataURL(source);
  };

  const imageHandler = (event) => {
    // imageReader(event.target.files[0]);
    setImage(event.target.files[0]);
  };

  const dragEnter = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDrag(true);
  };

  const dragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const dragLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDrag(false);
  };

  const dragDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(dragDrop);
    setImage(event.dataTransfer.files[0]);
    setDrag(false);
  };

  const cn = cx(styles.container, {
    [styles["drag-active"]]: drag,
  });

  const viewDrag = () => "Drop picture to send it";

  const viewForm = () => (
    <>
      <textarea
        className={styles.textarea}
        value={text}
        onChange={changeHandler}
      />
      <article className={styles["flex-column"]}>
        <button type="submit">
          <img
            src="/assets/icons/plane-icon.jpg"
            className={styles.icon}
            alt="placeholder"
          />
        </button>
        <div className={styles["input-wrapper"]}>
          <input
            type="file"
            name="image"
            onChange={imageHandler}
            files={image}
            className={styles["input-file"]}
          />
          <img
            src="/assets/icons/clip.png"
            className={styles["input-icon"]}
            alt="icon"
          />
        </div>
      </article>
    </>
  );

  return (
    <form
      // className={styles.container}
      onDragEnter={dragEnter}
      onDrop={dragDrop}
      onDragLeave={dragLeave}
      onDragOver={dragOver}
      onSubmit={submitHandler}
      className={cn}
    >
      {drag ? viewDrag() : viewForm()}
    </form>
  );
};

const mapState = ({ user, currentChat }) => ({ user, currentChat });

const mapDispatch = {
  addNewMessageRequest,
};

export default connect(mapState, mapDispatch)(MessageArea);

/*
 TODO-in-future: доопрацювати компоненту, створивши мініатюру файлу для перед-перегляду до відправки.
Варіанти реалізації:
1. Ще один стейт, в якому буде зберігатись зчитаний файл, що встановлюється в якості src для картинки
2. ПЕреробити drag-n-drop флоу на окрему компоненту, яка працюватиме за паттерном render-props
 
 */
