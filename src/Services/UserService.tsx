import axios from '../HttpCommon';
import {User} from '../Models/User';
import {UserDataInterface} from '../Models/UserDataInterface';

class UserService {

    private _relativeUrl = 'users';

    async retrieveUser(userId: string): Promise<User> {
        return User.deserialize((await axios.get(`${this._relativeUrl}/${userId}`)).data);
    }

    async retrieveUserList(): Promise<User[]> {
        const response = await axios.get(`${this._relativeUrl}`);

        return response.data
            .map((userData: UserDataInterface) => User.deserialize(userData));
    }

}

export default new UserService();