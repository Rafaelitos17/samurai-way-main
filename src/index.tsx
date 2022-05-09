import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


export type PostsDataType = Array<PostType>
export type PostType = {
    id: number,
    message: string
    likesCount: string
}

export type DialogsDataType = Array<DialogType>
export type DialogType = {
    id: number,
    name: string,
}
export type MessagesDataType = Array<MessageType>
export type MessageType = {
    id: number,
    message: string
}


let posts: PostsDataType = [
    {id: 1, message: 'hello', likesCount: '40'},
    {id: 1, message: 'bye bye', likesCount: '24'}
]

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

ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages}/>,
    document.getElementById('root')
);
