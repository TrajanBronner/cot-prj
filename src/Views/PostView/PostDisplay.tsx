import React from 'react';
import {Post} from '../../Models/Post';

type LocalProps = {
    post: Post
    deletePost?: (id: string) => void
}

const PostDisplay: React.FunctionComponent<LocalProps> = (props) => {

    return (
        <tr>
            <td>
                {props.post.title}
            </td>
            <td>
                {props.deletePost && <button onClick={() => props.deletePost && props.deletePost(props.post.id)}>Delete</button>}
            </td>
        </tr>
    );
};

export default PostDisplay;