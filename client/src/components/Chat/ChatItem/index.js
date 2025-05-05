import React, { useContext } from "react";
import { connect } from "react-redux";
import cx from "classnames";
import styles from "../Chat.module.css";
//  import UserContext from '../../../contexts/UserContext';

const ChatItem = (props) => {
  //  const user = useContext(UserContext);

  const { author, body } = props.message;
  const cn = cx(styles["message-container"], {
    [styles["current-user-message"]]: author === props.user?._id,
  });
  return (
    <div className={cn}>
      <p className={styles["message-author"]}>{author}</p>
      <p>{body}</p>
    </div>
  );
};

const mapState = ({ user }) => ({ user });

export default connect(mapState)(ChatItem);

/*
  {
         "_id": "65f7e8965535dc3ab39b8079",
         "author": "65e595a4b6e20f0ba323691c",
         "body": "My first message",
         "chat": "65e6df0524de2c1072ef5d9c",
         "__v": 0
       },
 
 
 */
