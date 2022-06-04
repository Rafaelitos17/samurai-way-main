import {ActionsTypes} from "./state";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state: any, action: any) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: '0'
            };
            state.newPostText ='';
            state.posts.push(newPost)
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = (): ActionsTypes => ({type: ADD_POST})
export const updatePostActionCreator = (text: string):ActionsTypes => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;