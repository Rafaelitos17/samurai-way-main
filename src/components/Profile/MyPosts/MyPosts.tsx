import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Posts/Post";
import {PostType} from "../../../redux/state";

type MyPosts = {
    posts: Array<PostType>
    addPost: (postMessage: string) => void
}

export const MyPosts = (props: MyPosts) => {
    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if(newPostElement.current) {
            props.addPost(newPostElement.current.value)
            newPostElement.current.value = ""
        }
    }


    return (
        <div className={s.postsBlock}>
            <h3>MyPosts</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
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