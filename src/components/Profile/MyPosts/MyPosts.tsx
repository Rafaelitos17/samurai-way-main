import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Posts/Post";
import {PostType} from "../../../redux/store";

type MyPostsType = {
    addPost:() => void
    updateNewPostText:(text:string) => void
    posts: Array<PostType>
    newPostText: string
}

export const MyPosts = (props: MyPostsType) => {
    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        if(newPostElement.current) {
            let text = newPostElement.current.value
            props.updateNewPostText(text)
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>MyPosts</h3>
            <div>
                <textarea
                    onChange={onPostChange}
                    value={props.newPostText}
                    ref={newPostElement}
                ></textarea>
            </div>
            <div>
                <button onClick={onAddPost}>add post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}