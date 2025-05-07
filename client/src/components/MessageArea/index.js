import React, { useState } from "react";
import { connect } from "react-redux";
import styles from "./MessageArea.module.css";
import { addNewMessageRequest } from "../../actions/actionCreators";

// зчитувати нове повідомлення і відправляти його ДашБорду, а той - відправляти на сервер
const MessageArea = (props) => {
  const [text, setText] = useState("");
  // другий useState для вибору файла - зробити input керованим елементом
  const [image, setImage] = useState();

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
  return (
    <form className={styles.container} onSubmit={submitHandler}>
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
            className={styles["input-icon"]} alt="icon"
          />
        </div>
      </article>
    </form>
  );
};

const mapState = ({ user, currentChat }) => ({ user, currentChat });

const mapDispatch = {
  addNewMessageRequest,
};

export default connect(mapState, mapDispatch)(MessageArea);

/*
 Переробити компоненту MessageArea на самостійну відправку action
 
 */
