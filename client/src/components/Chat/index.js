import React from 'react';
import styles from './Chat.module.css';

// при виборі певного діалогу у DialogList - Дашборд буде робити запит на сервер, а Чат - відображати всю історію повідомлень у чаті
const Chat = () => {
    return (
        <section className={styles.chat}>
            Chat
        </section>
    );
}

export default Chat;
