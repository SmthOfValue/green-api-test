import React, { useState } from 'react';
import styles from './App.module.css';
import { RouterProvider } from 'react-router-dom';
import { router } from '../../router/router';
import { TApiParams, TContactNumber } from '../../utils/types';
import { ApiParamsContext } from '../../utils/context';

function App() {

  //значения для контекста по умолчанию
  const defaultApiParams: TApiParams = {idInstance: '', apiTokenInstance: ''};

  //создание контекста и сеттера контекста
  const [
    communicationParams,
    setCommunicationParams
  ] = useState<TApiParams & TContactNumber>({...defaultApiParams, contact: ''});

  return (
    <ApiParamsContext.Provider value={[communicationParams, setCommunicationParams]} >
      <RouterProvider router={router} />  
    </ApiParamsContext.Provider> 
  );
}

export default App;
