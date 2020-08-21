import React from 'react';
import {Post} from '../../Models/Post';
import PostDisplay from './PostDisplay';

type LocalProps = {
    postList: Post[]
    deletePost?: (id: string) => void
}

const PostListDisplay: React.FunctionComponent<LocalProps> = (props) => {

    return (
        <div className={'cent'}>
            <table className={'m'}>
                <thead>
                <tr>
                    <th>
                        Title
                    </th>
                </tr>
                </thead>
                <tbody>

                {
                    props.postList.map(post => {
                        return <PostDisplay key={post.id} post={post} deletePost={props.deletePost}/>;
                    })
                }

                </tbody>
            </table>
        </div>
    );
};

export default PostListDisplay;