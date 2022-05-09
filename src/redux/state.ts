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
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>

}
export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}


export let state:RootStateType  = {
    profilePage: {
        posts: [
            {id: 1, message: 'hello', likesCount: 20},
            {id: 1, message: 'bye bye', likesCount: 30}
        ]
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
        ]
    },
    sidebar: {}
}