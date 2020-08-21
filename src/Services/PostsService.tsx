import axios from '../HttpCommon';
import {Post} from '../Models/Post';

class PostService {

    private _relativeUrl = 'posts';

    async retrievePost(): Promise<Post> {
        return Post.deserialize((await axios.get(`${this._relativeUrl}`)).data);
    }

    async retrievePostList(): Promise<Post[]> {
        const response = await axios.get(`${this._relativeUrl}`);

        return response.data
            .map((postData: any) => Post.deserialize(postData));
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