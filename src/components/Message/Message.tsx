import React, { FC } from 'react';
import styles from './Message.module.css';

interface IMessage {
    msg: string,
    time: string,
    sent: boolean
}

export const Message: FC<IMessage> = ({msg, time, sent}) => {

    const setMessageClass = (messageIsSent: boolean): string => {
        if (messageIsSent) {
            return styles.item + ' ' + styles.item_sent;
        } else {
            return styles.item;
        }
    };

    return (
        <li className={setMessageClass(sent)}>
            <p className={styles.message_text}>{msg}</p>
            <p className={styles.message_time}>{time}</p>
        </li>
    )
}
