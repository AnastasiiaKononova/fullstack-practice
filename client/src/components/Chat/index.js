import React, {useContext, useEffect, useState, useRef} from 'react';
import styles from './Chat.module.css';
import ChatContext from '../../contexts/ChatContext';
import {getOneChat} from '../../api/index';
import ChatItem from './ChatItem';

// при виборі певного діалогу у DialogList - Дашборд буде робити запит на сервер, а Чат - відображати всю історію повідомлень у чаті

const Chat = (props) => {
    const [currentChat] = useContext(ChatContext);
    const scrollRef = useRef(null);

    const [chatStory, setChatStory] = useState([]);

    useEffect(() => {
        if(currentChat){
            getOneChat(currentChat._id)
            .then(res => {
                setChatStory(res.data.data.messages);
            })
        }

    }, [currentChat]);


    useEffect(()=> {
        scrollRef.current.scrollIntoView();
    })

    return (
        <section className={styles.chat}>
            {chatStory?.map(mes => <ChatItem message={mes} key={mes._id}/>)}
            <div ref={scrollRef}></div>
        </section>
    );
}

export default Chat;

/*
Fullstack task:
-- Back
1+. Додати до контроллерів на backend функціонал отримання одного чата за його id (req.params)
2+. Прописати роут для отримання 1 чата
--Front
1+. Написати api-запит на отримання каррент чата
2. Компонента Chat має робити цей запит і отримувати результат 


*/
