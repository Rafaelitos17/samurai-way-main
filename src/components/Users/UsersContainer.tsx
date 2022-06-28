import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unFollowAC} from "../../redux/users-reducer";

let mapStateToProps = (state: any) => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage
    }
}
let mapDispatchToProps = (dispatch: any)=> {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: any)=> {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: any)=> {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: any)=> {
            dispatch(setTotalUsersCountAC(totalCount))
        },

    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)