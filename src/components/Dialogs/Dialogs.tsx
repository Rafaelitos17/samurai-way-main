import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";

export const Dialogs = () => {

    type DialogsDataType = Array<DialogDataType>
    type DialogDataType = {
        id: number,
        name: string,
    }
    type MessagesDataType = Array<MessageDataType>
    type MessageDataType = {
        id: number,
        message: string
    }

    let dialogs: DialogsDataType = [
        {id: 1, name: 'Person1'},
        {id: 2, name: 'Person2'},
        {id: 3, name: 'Person3'},
        {id: 4, name: 'Person4'},
        {id: 5, name: 'Person5'},
    ]


    let messages: MessagesDataType = [
        {id: 1, message: 'Hi1'},
        {id: 2, message: 'Hi2'},
        {id: 3, message: 'Hi3'},
        {id: 4, message: 'Hi4'},
        {id: 5, message: 'Hi5'}
    ]


    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}