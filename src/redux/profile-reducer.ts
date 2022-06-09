const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'hello', likesCount: '20'},
        {id: 1, message: 'bye bye', likesCount: '30'},
    ],
    newPostText: "SamuraiJS"
}

export const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: '0'
            };
            state.posts.push(newPost)
            state.newPostText =''
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updatePostActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text})