import React from "react";
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profile-reducer";
import {StoreContext} from "../../../StoreContext";
import {MyPosts} from "./MyPosts";


export const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store:any)=> {
                let state = store.getState();
                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                let changePost = (text: string) => {
                    let action = updatePostActionCreator(text)
                    store.dispatch(action)
                }
                return <MyPosts
                    addPost={addPost}
                    updateNewPostText={changePost}
                    posts={state.profileReducer.posts}
                    newPostText={state.profileReducer.newPostText}
                />
            }
        }
        </StoreContext.Consumer>
    )
}