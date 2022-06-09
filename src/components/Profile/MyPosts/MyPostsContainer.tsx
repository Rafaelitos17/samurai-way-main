import React from "react";
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profile-reducer";
import {StoreContext} from "../../../StoreContext";
import {MyPosts} from "./MyPosts";


export const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store)=> {
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
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}
                />
            }
        }
        </StoreContext.Consumer>
    )
}