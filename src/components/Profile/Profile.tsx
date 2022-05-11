import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType, ProfilePageType, RootStateType} from "../../redux/state";

type ProfilesType = {
    state: ProfilePageType
}

export const Profile = (props: ProfilesType) => {

    return (
        <div>
            <div>
                <ProfileInfo/>
                <MyPosts posts={props.state.posts}/>
            </div>
        </div>
    )
}
