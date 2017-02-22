import dataset from './dataset';
import Icons from '../images';


export default UserApi = {
    getUserData() {
        const {user} = dataset;

        
        if (user.avatar.local) {
            user.avatar = Icons.avatars[user.avatar.local];
        } else if(!message.avatar.uri) {
            user.avatar = {uri: ''};
        }

        return user;
    }
}