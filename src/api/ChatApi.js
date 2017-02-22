import dataset from './dataset';
import Icons from '../images';

export default ChatApi = {
    getMessages() {
        return dataset.chat.messages.map(message => {
            if (message.avatar.local) {
                message.avatar = Icons.avatars[message.avatar.local];
            } else if(!message.avatar.uri) {
                message.avatar = {uri: ''};
            }

            return message;
        });
    }
}