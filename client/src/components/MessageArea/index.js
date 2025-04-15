import React from 'react';
import styles from './MessageArea.module.css';


// зчитувати нове повідомлення і відправляти його ДашБорду, а той - відправляти на сервер
const MessageArea = () => {
    return (
        <form className={styles.container}>
            <textarea className={styles.textarea}/>
            <button><img src='/assets/icons/plane-icon.jpg' className={styles.icon}/></button>
        </form>
    );
}

export default MessageArea ;
