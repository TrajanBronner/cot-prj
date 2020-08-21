import React, {useState} from 'react';
import {User} from '../../Models/User';

type LocalProps = {
    user: User;
}

const UserDisplay: React.FunctionComponent<LocalProps> = (props) => {

    const [showDetails, setShowDetails] = useState(false);
    const [showPosts, setShowPosts] = useState(false);

    const switchUserDetails = () => {
        setShowDetails(!showDetails);
    };

    const switchUserPosts = () => {
        setShowPosts(!showPosts);
    };

    return (
        <div className={'m'}>
            <div>
                <span>{props.user?.name}</span>
                <div>
                    <span className={'mw-300'}>
                        <button className={'mx'} onClick={switchUserDetails}>{showDetails ? 'Hide' : 'Show'} Details</button>
                    </span>
                    <span className={'mw-300'}>
                        <button className={'mx'} onClick={switchUserPosts}>{showPosts ? 'Hide' : 'Show'} Posts</button>
                    </span>
                </div>
            </div>


            {showDetails && <div className={'m'}>
                <div><span>Username</span><span>{props.user?.username}</span></div>
                <div><span>Mail</span><span>{props.user?.email}</span></div>
                <div><span>Adress</span><span>{props.user?.fullAddress()}</span></div>
            </div>}

        </div>
    );
};

export default UserDisplay;