import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";



export const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {(store: any) => {
            // let state = store.getState().dialogsPage
            let state = store.getState()

            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator())
            }
            let onNewMessageChange = (body: string) => {
                store.dispatch(updateNewMessageBodyCreator(body))
            }
            return <Dialogs
                updateNewMessageBody={onNewMessageChange}
                sendMessage={onSendMessageClick}
                dialogsPage={state.dialogsReducer}
            />
        }
    }

    </StoreContext.Consumer>

}