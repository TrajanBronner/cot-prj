import React, {useEffect, useState} from 'react';
import {from} from 'rxjs';
import {User} from '../Models/User';
import UserService from '../Services/UserService';
import UserDisplay from './UserDisplay';

const UserView: React.FunctionComponent<any> = (props) => {

    const [userList, setUserList] = useState<User[]>([]);

    useEffect(() => {

        const sub = from(UserService.retrieveUserList())
            .subscribe({
                next: userList => {
                    setUserList(userList);
                },
                error: error => {
                    // TODO
                },
            });

        return () => {
            sub.unsubscribe();
        };

    }, []);

    return (
        <div>
            {
                userList.map(user => {
                    return <UserDisplay user={user}/>;
                })
            }

        </div>
    );
};

export default UserView;