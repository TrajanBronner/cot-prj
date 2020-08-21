import axios from '../HttpCommon';
import {Post} from '../Models/Post';

class PostService {

    private _relativeUrl = 'posts';
    private _cachedPostList: any;

    async retrievePost(): Promise<Post> {
        return Post.deserialize((await axios.get(`${this._relativeUrl}`)).data);
    }

    async retrievePostList(): Promise<Post[]> {
        if (this._cachedPostList != null) {
            return this._cachedPostList;
        }

        const response = await axios.get(`${this._relativeUrl}`);

        const postList = response.data.map(Post.deserialize);
        this._cachedPostList = postList;

        return postList;
    }

    async updatePost(postId: number, postData: Partial<Post>): Promise<Post> {
        return Post.deserialize((await axios.patch(`${this._relativeUrl}/${postId}`, postData)).data);
    }

    async deletePost(postId: number): Promise<any> {
        return axios.delete(`${this._relativeUrl}/${postId}`);
    }

    async retrievePostFromUser(userId: string): Promise<Post[]> {
        const postList = await this.retrievePostList();
        return postList.filter(post => post.userId === userId);
    }
}

export default new PostService();