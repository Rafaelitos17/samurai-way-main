import React from 'react';
import s from '../Dialogs.module.css';

type MessageType = {
    message: string
}

export const Message: React.FC<MessageType> = (props) => {

    let textMessage = React.createRef<HTMLTextAreaElement>();
    let textOnArea = () => {
        alert(textMessage.current?.value)
    }
    return (
        <div
            className={s.message}>{props.message}
            {/*<textarea ref={textMessage}></textarea>*/}
            {/*<button onClick={textOnArea}>addText</button>*/}
        </div>
    )
}