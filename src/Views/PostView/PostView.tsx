import React, {useEffect, useState} from 'react';
import {from} from 'rxjs';
import {Post} from '../../Models/Post';
import PostsService from '../../Services/PostsService';
import PostDisplay from './PostDisplay';

const PostView: React.FunctionComponent<any> = (props) => {

    const nbResults = 25;

    const [postList, setPostList] = useState<Post[]>([]);
    const [displayedPostList, setDisplayedPostList] = useState<Post[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(0);

    useEffect(() => {

        const sub = from(PostsService.retrievePostList())
            .subscribe({
                next: postList => {
                    setPostList(postList);
                    _setPaginationAndList(postList, 0);
                },
                error: error => {
                    // TODO
                },
            });

        return () => {
            sub.unsubscribe();
        };

    }, []);

    const _setPaginationAndList = (postList: Post[], page: number): void => {
        setCurrentPage(page);
        const partialPostList = postList.slice(page * nbResults, (page + 1) * nbResults);
        setDisplayedPostList(partialPostList);
    };

    const lastPage = () => {
        return Math.ceil(postList.length / nbResults) - 1;
    };

    const isFirstPage = () => {
        return currentPage === 0;
    };

    const isLastPage = () => {
        return currentPage === lastPage();
    };

    const goToPreviousPage = () => {
        const newPage = currentPage - 1;
        _setPaginationAndList(postList, newPage);
    };

    const goToNextPage = () => {
        const newPage = currentPage + 1;
        _setPaginationAndList(postList, newPage);
    };

    const goToFirstPage = () => {
        const newPage = 0;
        _setPaginationAndList(postList, newPage);
    };

    const goToLastPage = () => {
        const newPage = lastPage();
        _setPaginationAndList(postList, newPage);
    };

    return (
        <div>

            <div className={'m'}>Page {currentPage + 1}</div>
            <div className={'m'}>
                {!isFirstPage() && <button className={'mx mw-100'} onClick={goToFirstPage}>First page</button>}
                {!isFirstPage() && <button className={'mx mw-100'} onClick={goToPreviousPage}>Previous page</button>}
                {!isLastPage() && <button className={'mx mw-100'} onClick={goToNextPage}>Next page</button>}
                {!isLastPage() && <button className={'mx mw-100'} onClick={goToLastPage}>Last page</button>}
            </div>

            {
                displayedPostList.map(post => {
                    return <PostDisplay key={post.id} post={post}/>;
                })
            }
        </div>
    );
};

export default PostView;