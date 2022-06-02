import React from "react";
import s from './Post.module.css'

type PostPropsType = {
    message: string
    likesCount: string
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/50px_x_50px_coloured_logo_on_white_background.svg/768px-50px_x_50px_coloured_logo_on_white_background.svg.png" alt="Avatar"/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}
