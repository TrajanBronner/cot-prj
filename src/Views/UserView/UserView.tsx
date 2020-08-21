import React, {useEffect, useState} from 'react';
import {from} from 'rxjs';
import {User} from '../../Models/User';
import UserService from '../../Services/UserService';
import SearchInput from '../Common/SearchInput';
import UserDisplay from './UserDisplay';

const UserView: React.FunctionComponent<any> = (props) => {

    const [userList, setUserList] = useState<User[]>([]);
    const [filteredUserList, setFilteredUserList] = useState<User[]>([]);

    useEffect(() => {

        const sub = from(UserService.retrieveUserList())
            .subscribe({
                next: userList => {
                    setUserList(userList);
                    setFilteredUserList(userList);
                },
                error: error => {
                    // TODO
                },
            });

        return () => {
            sub.unsubscribe();
        };

    }, []);

    const searchName = (searchedName: string) => {
        const _searchedName = searchedName?.toLowerCase();

        if (_searchedName == null) {
            return;
        }

        setFilteredUserList(userList.filter(user => user.name?.toLowerCase()?.includes(_searchedName)));
    };

    const resetInput = () => {
        setFilteredUserList(userList);
    };

    return (
        <div>

            <SearchInput title={'Search user by first name or last name'} onNewSearch={searchName} onReset={resetInput}/>

            {
                filteredUserList.map(user => {
                    return <UserDisplay key={user.id} user={user}/>;
                })
            }

        </div>
    );
};

export default UserView;