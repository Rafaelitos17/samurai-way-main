import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/state";

type DialogsType = {
    store: StoreType
}

export const Dialogs = (props: DialogsType) => {
    let state = props.store.getState().dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message}/>)
    let newMessageBody = state.newMessageBody
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
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