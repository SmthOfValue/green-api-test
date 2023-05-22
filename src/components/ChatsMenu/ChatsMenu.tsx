import React, { useContext, useState } from 'react';
import styles from './ChatsMenu.module.css';
import { ChatPreview } from '../ChatPreview/ChatPreview';
import { TChatType } from '../../utils/types';
import { ApiParamsContext } from '../../utils/context';

export const ChatsMenu = () => {
    
    const [chats, setChats] = useState<TChatType[]>([]);
    const [number, setNumber] = useState('');
    const [
        communicationParams,
        setCommunicationParams
    ] = useContext(ApiParamsContext);

    const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumber(e.target.value);
    }

    const handleClick = () => {
        setChats([...chats, {contact: number, msg: '', time: '', unreadMsgs: null}]);
        setCommunicationParams({...communicationParams, contact: number});
        setNumber('');
    }

    const chatsToRender = chats.map((chat, i) => {
        return <ChatPreview 
            key={i}
            contact = {chat.contact}
            msg = {chat.msg}
            time = {chat.time}
            unreadMsgs = {chat.unreadMsgs}
        />;
    });

    return (
        <div className={styles.menu}>
            <h2 className={styles.heading}>Беседы</h2>
            <ul className={styles.chats_list}>
                <li className={styles.item}>
                    <input 
                        onChange={handleNumberChange}
                        className={styles.input}
                        type='text'
                        placeholder='Введите номер собеседника' 
                    />
                    <button 
                        className={styles.button} 
                        onClick={handleClick} 
                        disabled={number === '' ? true : false}
                    >
                        Создать беседу
                    </button>
                </li>
                {chatsToRender}
            </ul>
        </div>
    )
}
