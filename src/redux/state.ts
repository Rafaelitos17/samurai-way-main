import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state:RootStateType ) => void
    getState : () => RootStateType
    subscribe: (obs: () => void) => void
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes = ReturnType<typeof profileReducer>| ReturnType<typeof dialogsReducer>

export const store:StoreType = {
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
    _callSubscriber() {
        console.log("")
    },
    getState() {
        return this._state
    },
    subscribe(obs) {
        this._callSubscriber = obs
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
    }
}