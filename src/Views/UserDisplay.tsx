import React from 'react';
import {User} from '../Models/User';

type LocalProps = {
    user: User;
}

const UserDisplay: React.FunctionComponent<LocalProps> = (props) => {

    return (
        <div className={'m'}>
            <div>{props.user?.name}</div>
            <div>{props.user?.getAddress()}</div>
        </div>
    );
};

export default UserDisplay;