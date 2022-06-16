import React from "react";
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";

const mapStoreToProps = (state: any) => {
    return {
        posts: state.profileReducer.posts,
        newPostText: state.profileReducer.newPostText
    }
}

const mapDispatchToProps = (dispatch: any)=> {
    return {
        addPost: ()=> {
            dispatch(addPostActionCreator())
        } ,
        updateNewPostText: (text:string)=> {
            let action = updatePostActionCreator(text)
            dispatch(action)
        }
    }
}

export const MyPostsContainer = connect(mapStoreToProps,mapDispatchToProps) (MyPosts)