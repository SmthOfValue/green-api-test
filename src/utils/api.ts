import { BASE_URL } from './constants';
import { TDeleteNotificationArgs, TPostMessageArgs, TReceiveNotificationArgs } from './types';

class Api {
    private _baseUrl: string;
    
    constructor(data: string) {
      this._baseUrl = data;
    }
  
    // вспомогательная функция проверки на ошибку возвращающая либо ОК ,либо ОШИБКУ
    _parseResponse = (res: Response) =>
      res.ok ? res.json() : res.json().then((err) => Promise.reject(console.log('Ошибка', err)));
  
    async postMessage({
        text,
        idInstance,
        apiTokenInstance,
        contact
    }: TPostMessageArgs) {
        const res = await fetch(
            `${this._baseUrl}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({ chatId: `${contact}@c.us`, message: text }),
        });
        return await this._parseResponse(res);
    }

    async receiveNotification({idInstance, apiTokenInstance}: TReceiveNotificationArgs) {
        const res = await fetch(
            `${this._baseUrl}/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
        });
        return await this._parseResponse(res);
    };
           

    async deleteNotification({idInstance, apiTokenInstance, receiptId}: TDeleteNotificationArgs) {
        const res = await fetch(
            `${this._baseUrl}/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receiptId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
        });
        return await this._parseResponse(res);
    }  
}

  export const api = new Api(BASE_URL);
