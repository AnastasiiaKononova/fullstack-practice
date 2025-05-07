import React, { useContext } from "react";
import { connect } from "react-redux";
import cx from "classnames";
import styles from "../Chat.module.css";
import CONSTANTS from '../../../constants';

const ChatItem = (props) => {
  //  const user = useContext(UserContext);

  const {message: {author, body, imagePath}} = props;
  const cn = cx(styles["message-container"], {
    [styles["current-user-message"]]: author._id === props.user?._id,
  });
  return (
    <div className={cn}>
      <p className={styles["message-author"]}>{author.firstName} {author.lastName}</p>
      <p>{body}</p>
      {imagePath && <img src={`${CONSTANTS.API_BASE}/${imagePath}`} className={styles['message-image']} alt="icon"/>}
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
         "imagePath": "1746615462475.plane-icon.jpg"
         "__v": 0
       },
 
   Якщо imagePath є - відображаємо <img src=`http://localhost:5000/1746615462475.plane-icon.jpg" />
 
 */
