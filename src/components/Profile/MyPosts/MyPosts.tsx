import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Posts/Post";
import {addPostActionCreator,  updatePostActionCreator} from "../../../redux/profile-reducer";
import {ActionsTypes, PostType} from "../../../redux/state";

type MyPosts = {
    posts: Array<PostType>
    dispatch: (action: ActionsTypes) => void
    newPostText: string
}


export const MyPosts = (props: MyPosts) => {
    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if (newPostElement.current) {
            props.dispatch(addPostActionCreator)
        }
    }

    let changePost = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.dispatch(updatePostActionCreator)
        }
    }


    return (
        <div className={s.postsBlock}>
            <h3>MyPosts</h3>
            <div>
                <textarea
                    onChange={changePost}
                    value={props.newPostText}
                    ref={newPostElement}
                ></textarea>
            </div>
            <div>
                <button onClick={addPost}>add post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}