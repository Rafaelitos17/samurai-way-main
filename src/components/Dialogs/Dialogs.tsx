import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";

type DialogsType = {
    dialogsPage: any
    updateNewMessageBody:(body:string)=> void
    sendMessage:()=> void
}

export const Dialogs = (props: DialogsType) => {
    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map((d:any) => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    let messagesElements = state.messages.map((m: any) => <Message message={m.message} key={m.id}/>)
    let newMessageBody = state.newMessageBody


    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.updateNewMessageBody(body)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <div>
                    <textarea
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder='Enter your Message'>
                    </textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>SEND</button>
                </div>
            </div>
        </div>
    )
}