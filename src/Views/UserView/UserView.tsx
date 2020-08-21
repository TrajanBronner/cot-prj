import React, {useEffect, useState} from 'react';
import {from} from 'rxjs';
import {User} from '../../Models/User';
import UserService from '../../Services/UserService';
import UserDisplay from './UserDisplay';

const UserView: React.FunctionComponent<any> = (props) => {

    const [userList, setUserList] = useState<User[]>([]);
    const [filteredUserList, setFilteredUserList] = useState<User[]>([]);
    const [searchedValue, setSearchedValue] = useState('');

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

    const searchName = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchedName = event.target?.value?.toLowerCase();
        setSearchedValue(searchedName);

        if (searchedName == null) {
            return;
        }

        setFilteredUserList(userList.filter(user => user.name?.toLowerCase()?.includes(event.target?.value)));
    };

    const resetInput = () => {
        setFilteredUserList(userList);
        setSearchedValue('');
    };

    return (
        <div>

            <div className={'m'}>
                <span className={'m'}>Search user by first name or last name</span>
                <input type='text'
                       value={searchedValue}
                       onChange={(event) => searchName(event)}/>
                <button className={'m'} onClick={resetInput}>Reset</button>
            </div>


            {
                filteredUserList.map(user => {
                    return <UserDisplay key={user.id} user={user}/>;
                })
            }

        </div>
    );
};

export default UserView;