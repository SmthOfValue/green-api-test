import React, { FC } from 'react';
import styles from './ChatPreview.module.css';

interface IChatPreview {
    contact: string,
    msg: string,
    time: string,
    unreadMsgs: number | null,
    active?: boolean,
}

export const ChatPreview: FC<IChatPreview> = ({contact, msg, time, unreadMsgs, active = false}) => {
    return (
        <li className={styles.item}>
            <div className={styles.contact_wrapper}>
                <p className={styles.contact}>{contact}</p>
                <p className={styles.message}>{msg}</p>
            </div>
            <div className={styles.time_wrapper}>
                <p className={styles.time}>{time}</p>
                {unreadMsgs &&
                    <p className={styles.unread_count}>{unreadMsgs}</p>
                }
            </div>
        </li>
    )
}
