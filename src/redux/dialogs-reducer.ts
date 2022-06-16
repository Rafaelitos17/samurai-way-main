const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogs: [
        {id: 1, name: 'Person1'},
        {id: 2, name: 'Person2'},
        {id: 3, name: 'Person3'},
        {id: 4, name: 'Person4'},
        {id: 5, name: 'Person5'},
    ],
    messages: [
        {id: 1, message: 'Hi1'},
        {id: 2, message: 'Hi2'},
        {id: 3, message: 'Hi3'},
        {id: 4, message: 'Hi4'},
        {id: 5, message: 'Hi5'}
    ],
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.body
            }

        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
                newMessageBody: ""
            }
        }

        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (text: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body: text})


export default dialogsReducer;