import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Posts/Post";
import {PostType} from "../../../redux/state";

type MyPosts = {
    posts: Array<PostType>
}

export const MyPosts = (props:MyPosts) => {
    debugger
    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    return (
        <div className={s.postsBlock}>
            <h3>MyPosts</h3>
            <div>
                <textarea></textarea>
            </div>
            <button>add post</button>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}