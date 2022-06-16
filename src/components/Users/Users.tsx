import React from 'react';
import styles from './Users.module.css'

export const Users = (props: any) => {
    if(props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'https://cdn.dribbble.com/users/4329969/screenshots/8976505/media/b266f80163ba2cc1b641011e3d222015.png?compress=1&resize=400x300',
                    followed: true,
                    fullName: 'Dmitry',
                    status: 'Im boss',
                    location: {city: "Minsk", country: "Belarus"}},
                {
                    id: 2,
                    photoUrl: 'https://cdn.dribbble.com/users/4329969/screenshots/8976505/media/b266f80163ba2cc1b641011e3d222015.png?compress=1&resize=400x300',
                    followed: false,
                    fullName: 'Sasha',
                    status: 'Im boss too',
                    location: {city: "Moscow", country: "Russia"}
                },
                {
                    id: 3,
                    photoUrl: 'https://cdn.dribbble.com/users/4329969/screenshots/8976505/media/b266f80163ba2cc1b641011e3d222015.png?compress=1&resize=400x300',
                    followed: true,
                    fullName: 'Andrew',
                    status: 'Im boss ee',
                    location: {city: "Kiev", country: "Ukraine"}},
            ],
        )
    }
    return (
        <div>
            {
                props.users.map((u: any) => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} alt="Fati" className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ?<button onClick={()=> props.follow(u.id)}>Unfolow</button>
                            :<button onClick={()=> props.unFollow(u.id)}>Follow</button>
                        }

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                        <div></div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};
