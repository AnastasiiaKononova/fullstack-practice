import React, {useState} from 'react';
import styles from './MessageArea.module.css';


// зчитувати нове повідомлення і відправляти його ДашБорду, а той - відправляти на сервер
const MessageArea = (props) => {
    const [text, setText] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        props.sendData(text);
        setText('');
    }

    const changeHandler = ({target: {value}}) => {
        setText(value);
    }
    return (
        <form className={styles.container} onSubmit={submitHandler}>
                 <textarea className={styles.textarea} value={text} onChange={changeHandler}/>
                 <button type="submit"><img src='/assets/icons/plane-icon.jpg' className={styles.icon}/></button>
             </form>
     );
 }

export default MessageArea ;
