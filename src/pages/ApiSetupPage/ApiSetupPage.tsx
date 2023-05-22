import React, { useContext, useState } from 'react';
import styles from './ApiSetupPage.module.css';
import { TApiParams } from '../../utils/types';
import { ApiParamsContext } from '../../utils/context';
import { useNavigate } from 'react-router-dom';

export const ApiSetupPage = () => {

    const [formValues, setFormValues] = useState<TApiParams>({idInstance: '', apiTokenInstance: ''});
    const [communicationParams, setCommunicationParams] = useContext(ApiParamsContext);
    const navigate = useNavigate();

    const handleIdInstanceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({...formValues, idInstance: e.target.value});
    }

    const handleApiTokenInstanceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({...formValues, apiTokenInstance: e.target.value});
    }

    //сохранение идентификатора и токена для обращения к api в контекст
    const handleButtonClick = () => {
        setCommunicationParams({idInstance: formValues.idInstance, apiTokenInstance: formValues.apiTokenInstance, contact: communicationParams.contact});
        navigate('/chat');
    }

    return (
        <section className={styles.main}>
            <form className={styles.form}>
                <label htmlFor='idInstance'>Введите idInstance</label>
                <input 
                    id='idInstance' 
                    type='text' 
                    onChange={handleIdInstanceChange}
                    value={formValues.idInstance} />
                <label htmlFor="apiTokenInstance">Введите apiTokenInstance</label>
                <input 
                    id='apiTokenInstance' 
                    type='text' 
                    onChange={handleApiTokenInstanceChange}
                    value={formValues.apiTokenInstance}
                    />
                <button 
                    type='button'
                    onClick={handleButtonClick}
                    disabled={formValues.idInstance === '' 
                    || formValues.apiTokenInstance === '' 
                    || formValues.idInstance === null 
                    || formValues.apiTokenInstance === null 
                    ? true 
                    : false}
                >
                    Сохранить
                </button>
            </form>
        </section>
    )
}
