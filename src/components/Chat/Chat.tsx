import React, { useState, useContext, useEffect } from 'react';
import styles from './Chat.module.css';
import { Message } from '../Message/Message';
import { ApiParamsContext } from '../../utils/context';
import { TMessage } from '../../utils/types';
import { api } from '../../utils/api';

export const Chat = () => {
    const [messages, setMessages] = useState<TMessage[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [
        communicationParams,
        setCommunicationParams
    ] = useContext(ApiParamsContext);

    //регулярное получение уведомлений о событиях
    //отбираются события получения нового сообщения,
    //новое сообщение добавляется на экран
    //каждое уведомление о событии удаляется из очереди
    useEffect(() => {
            if (communicationParams.contact !== '') {
                const interval = setInterval(() => {
                    const args = {
                        idInstance: communicationParams.idInstance,
                        apiTokenInstance: communicationParams.apiTokenInstance
                    }
                    api.receiveNotification(args)
                    .then((res) => {
                        if (res !== null) {
                            if (res.body.typeWebhook === 'incomingMessageReceived') {
                                setMessages([...messages, {
                                    id: res.receiptId,
                                    msg: res.body.messageData.textMessageData.textMessage,
                                    sent: false
                                }])
                            }
                            const args = {
                                idInstance: communicationParams.idInstance,
                                apiTokenInstance: communicationParams.apiTokenInstance,
                                receiptId: res.receiptId
                            };
                            api.deleteNotification(args);
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    });
                }, 1000);
                return () => clearInterval(interval);
            }
    }, [communicationParams.contact]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const handleClick = async () => {
        const args = {
            text: inputValue,
            idInstance: communicationParams.idInstance,
            apiTokenInstance: communicationParams.apiTokenInstance,
            contact: communicationParams.contact
        };
       await api.postMessage(args)
        .then(data => setMessages([...messages, {id: data.idMessage, msg: inputValue, sent: true}]))
        .catch((err) => console.log(err.message));
    }

    const handleSubmitOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleClick();
            setInputValue('');
        }
    };

    const messagesToRender = messages.map((message, i) => {
        return (
        <Message 
            key={i}
            msg = {message.msg}
            sent = {message.sent}
        />)
    })
    return (
        <div className={styles.chat}>
            <h2 className={styles.heading}>{communicationParams.contact ? communicationParams.contact : 'Собеседник'}</h2>
            <div className={styles.dialogue}>
                <ul className={styles.messages}>
                    {messagesToRender}
                </ul>
                <div className={styles.input_wrapper}>
                <input 
                    onChange={handleInputChange}
                    onKeyUp={handleSubmitOnEnter}
                    className={styles.message_input}
                    value={inputValue}
                    placeholder='Введите сообщение для отправки' 
                />
                <button 
                    className={styles.send_button}
                    onClick={handleClick} />
                </div>
            </div>
        </div>
    )
}
