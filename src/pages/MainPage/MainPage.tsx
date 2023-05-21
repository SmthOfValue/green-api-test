import React from 'react';
import styles from './MainPage.module.css';
import { ChatsMenu } from '../../components/ChatsMenu/ChatsMenu';
import { Chat } from '../../components/Chat/Chat';

export const MainPage = () => {
    return (
        <section className={styles.main}>
            <div className={styles.container}>
                <ChatsMenu />
                <Chat />
            </div>
        </section>
    )
}
