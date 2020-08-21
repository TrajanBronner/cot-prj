import React from 'react';
import {Post} from '../../Models/Post';

type LocalProps = {
    post: Post
    deletePost: (id: string) => void
}

const PostDisplay: React.FunctionComponent<LocalProps> = (props) => {

    return (
        <tr>
            <td>
                {props.post.title}
            </td>
            <td>
                <button onClick={() => props.deletePost(props.post.id)}>Delete post</button>
            </td>
        </tr>
    );
};

export default PostDisplay;