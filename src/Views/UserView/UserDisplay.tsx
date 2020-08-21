import React, {useState} from 'react';
import {Post} from '../../Models/Post';
import {User} from '../../Models/User';
import PostsService from '../../Services/PostsService';
import PostListDisplay from '../PostView/PostListDisplay';

type LocalProps = {
    user: User;
}

const UserDisplay: React.FunctionComponent<LocalProps> = (props) => {

    const [showDetails, setShowDetails] = useState<boolean>(false);
    const [showPosts, setShowPosts] = useState<boolean>(false);
    const [userPostList, setUserPostList] = useState<null | Post[]>(null);

    const switchUserDetails = () => {
        setShowDetails(!showDetails);
    };

    const switchUserPosts = async () => {
        setShowPosts(!showPosts);
        if (userPostList != null) {
            return;
        }
        const post = await PostsService.retrievePostFromUser(props.user.id);
        setUserPostList(post);
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

            {
                showDetails && <div className={'m'}>
                    <div><span>Username</span><span>{props.user?.username}</span></div>
                    <div><span>Mail</span><span>{props.user?.email}</span></div>
                    <div><span>Address</span><span>{props.user?.fullAddress()}</span></div>
                </div>
            }

            {
                showPosts && <div className={'m'}>
                    <PostListDisplay postList={userPostList || []}/>
                </div>
            }

        </div>
    );
};

export default UserDisplay;