import React, { useState } from 'react';
import styles from './ChatsMenu.module.css';
import { chatsData } from '../../data/chats';
import { ChatPreview } from '../ChatPreview/ChatPreview';

export const ChatsMenu = () => {
    
    const [chats, setChats] = useState(chatsData);

    const chatsToRender = chats.map((chat) => {
        return <ChatPreview 
            contact = {chat.contact}
            msg = {chat.msg}
            time = {chat.time}
            unreadMsgs = {chat.unreadMsgs}
        />;
    });

    return (
        <div className={styles.menu}>
            <h2 className={styles.heading}>Беседы</h2>
            <ul className={styles.chats_list}>{chatsToRender}</ul>
        </div>
    )
}
