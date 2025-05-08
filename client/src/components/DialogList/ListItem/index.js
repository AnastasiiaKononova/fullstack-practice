import React, { useContext } from "react";
import styles from "../DialogList.module.css";
import { connect } from "react-redux";
import { getCurrentChatRequest } from "../../../actions/actionCreators";
import cx from "classnames";
import "animate.css";

const IMAGE_PLACEHOLDER = "/assets/icons/image-placeholder.avif";

const ListItem = (props) => {
  // const [currentChat, setCurrentChat] = useContext(ChatContext);
  const {
    chat: { members, messages, imagePath, name, _id },
    currentChat,
  } = props;

  const cn = cx(styles['list-item'], {
    [styles['current-chat-item']]: currentChat?._id === _id
},'animate__animated', 'animate__slideInRight');

  const clickHandler = () => {
    // setCurrentChat(props.chat);
    props.getCurrentChatRequest(_id);
  };
  return (
    <article className={cn} onClick={clickHandler}>
      <img src={imagePath ? imagePath : IMAGE_PLACEHOLDER} />
      <h3>{name}</h3>
    </article>
  );
};

const mapState = ({ currentChat }) => ({ currentChat });

const mapDispatch = {
  getCurrentChatRequest,
};

export default connect(mapState, mapDispatch)(ListItem);
