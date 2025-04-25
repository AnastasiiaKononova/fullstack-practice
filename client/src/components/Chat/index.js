import React, {useContext, useEffect, useState, useRef} from 'react';
import styles from './Chat.module.css';
import ChatContext from '../../contexts/ChatContext';
import {getOneChat} from '../../api/index';
import ChatItem from './ChatItem';
import {connect} from 'react-redux';

// при виборі певного діалогу у DialogList - Дашборд буде робити запит на сервер, а Чат - відображати всю історію повідомлень у чаті

const Chat = (props) => {
    // const [currentChat] = useContext(ChatContext);
    const scrollRef = useRef(null);

    // const [chatStory, setChatStory] = useState([]);

    // useEffect(() => {
    //     if(currentChat){
    //         getOneChat(currentChat._id)
    //         .then(res => {
    //             setChatStory(res.data.data.messages);
    //         })
    //     }

    // }, [currentChat]);


    useEffect(()=> {
        scrollRef.current.scrollIntoView();
    })

    return (
        <section className={styles.chat}>
            {props.currentChat.messages?.map(mes => <ChatItem message={mes} key={mes._id}/>)}
            <div ref={scrollRef}></div>
        </section>
    );
}

const mapStateToProps = ({currentChat}) => ({currentChat})

export default connect(mapStateToProps)(Chat);

/*
 Компонента Chat отримує з загального стору currentChat і 
 рендерить з нього список повідомлень
 */