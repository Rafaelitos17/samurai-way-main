import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = (props: any) => {

    return (
        <div>
            <div>
                <ProfileInfo/>
                <MyPosts posts={props.state.posts}/>
            </div>
        </div>
    )
}
