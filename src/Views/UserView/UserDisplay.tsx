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


            {showDetails && <div>{props.user?.getAddress()}</div>}

        </div>
    );
};

export default UserDisplay;