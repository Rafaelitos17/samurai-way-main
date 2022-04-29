import React from "react";
import s from './Post.module.css'

type PostPropsType = {
    message: string
    likesCount: string
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <img src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png" alt="Avatar"/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}
