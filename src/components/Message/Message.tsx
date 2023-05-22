import React, { FC } from 'react';
import styles from './Message.module.css';

interface IMessage {
    msg: string,
    sent: boolean
}

export const Message: FC<IMessage> = ({msg, sent}) => {

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
        </li>
    )
}
