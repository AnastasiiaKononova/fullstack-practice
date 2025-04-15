import React from "react";
import styles from "../DialogList.module.css";

const IMAGE_PLACEHOLDER = "/assets/icons/image-placeholder.avif";

const ListItem = (props) => {
  const {
    chat: { members, messages, imagePath, name },
  } = props;
  return (
    <article className={styles["list-item"]}>
      <img src={imagePath ? imagePath : IMAGE_PLACEHOLDER} />
      <h3>{name}</h3>
    </article>
  );
};

export default ListItem;
