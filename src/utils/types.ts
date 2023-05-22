export type TApiParams = {
    idInstance: string,
    apiTokenInstance: string,
};

export type TChatType = {
    contact: string,
    msg: string,
    time: string,
    unreadMsgs: number | null
};

export type TContactNumber = {
    contact: string
};

export type TMessage = {
    msg: string,
    sent: boolean,
    id: string,
};

export type TPostMessageArgs = {
    text: string,
    idInstance: string,
    apiTokenInstance: string,
    contact: string
}

export type TReceiveNotificationArgs = {
    idInstance: string,
    apiTokenInstance: string
}

export type TDeleteNotificationArgs = {
    idInstance: string,
    apiTokenInstance: string,
    receiptId: string
}
