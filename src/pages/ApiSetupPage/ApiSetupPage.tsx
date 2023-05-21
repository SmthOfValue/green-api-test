import React from 'react';
import styles from './ApiSetupPage.module.css';

export const ApiSetupPage = () => {
    return (
        <section className={styles.main}>
            <form className={styles.form}>
                <label htmlFor='idInstance'>Введите idInstance</label>
                <input id='idInstance' type='text' />
                <label htmlFor="apiTokenInstance">Введите apiTokenInstance</label>
                <input id='apiTokenInstance' type='text' />
                <button type='button'>Сохранить</button>
            </form>
        </section>
    )
}
