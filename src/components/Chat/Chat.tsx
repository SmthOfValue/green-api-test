import React, { useState } from 'react';
import styles from './Chat.module.css';
import { messagesData } from '../../data/chats';
import { Message } from '../Message/Message';

export const Chat = () => {
    const [messages, setMessages] = useState(messagesData);

    const messagesToRender = messages.map((message) => {
        return (
        <Message 
            msg = {message.msg}
            sent = {message.sent}
            time = {message.time}
        />)
    })
    return (
        <div className={styles.chat}>
            <h2 className={styles.heading}>Собеседник</h2>
            <div className={styles.dialogue}>
                <ul className={styles.messages}>
                    {messagesToRender}
                </ul>
                <div className={styles.input_wrapper}>
                <input 
                    className={styles.message_input}
                    placeholder='Введите сообщение для отправки' 
                />
                <button className={styles.send_button} />
                </div>
            </div>
        </div>
    )
}
