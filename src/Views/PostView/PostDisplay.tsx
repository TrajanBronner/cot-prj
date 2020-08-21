import React from 'react';
import {Post} from '../../Models/Post';

type LocalProps = {
    post: Post
}

const PostDisplay: React.FunctionComponent<LocalProps> = (props) => {

    return (
        <div className={'m'}>
            {props.post.title}
        </div>
    );
};

export default PostDisplay;