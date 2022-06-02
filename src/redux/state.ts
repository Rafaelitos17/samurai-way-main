export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likesCount: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}
export type SidebarType = {}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE'

export const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hello', likesCount: '20'},
                {id: 1, message: 'bye bye', likesCount: '30'},
            ],
            newPostText: "SamuraiJS"
        },
        dialogsPage: {
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
        },
        sidebar: {
            commentaries: [
                {},
                {}
            ]
        }
    },
    _callSubscriber(state: RootStateType) {
        console.log("")
    },
    getState() {
        return this._state
    },
    subscribe(obs: () => void) {
        this._callSubscriber = obs
    },
    dispatch(action: any) {
        if (action.type === ADD_POST) {
            let newPost: PostType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: '0'
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push({id: 6, message: body})
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updatePostActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (text: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body: text})

