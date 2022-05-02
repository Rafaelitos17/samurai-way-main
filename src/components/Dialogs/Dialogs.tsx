import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: string
}

const DialogItem:React.FC<DialogItemType> = (props) => {
    let path = "dialogs/dialogs" + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

type MessageType = {
    message: string
}

const Message:React.FC<MessageType>= (props) =>{
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Ansu Fati" id="1"/>
                <DialogItem name="Pedri" id="2"/>
                <DialogItem name="Torres" id="3"/>
                <DialogItem name="Depay" id="4"/>
                <DialogItem name="Pique" id="5"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How its your IT-kamasutra"/>
                <Message message="Yo"/>
            </div>
            </div>
    )
}