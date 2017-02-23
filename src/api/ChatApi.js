import dataset from './dataset'; 
import Icons from '../images';
import UserApi from './UserApi';

export default ChatApi = {
    getMessages() {
        return dataset.chat.messages.map(message => {
            return Object.assign(message, {
                props: {
                    user: UserApi.getUserData(message.user_id),
                    replied: this.getRepliedData(message.id, message.channel_id)
                }
            });
        });
    }, 
    getRepliedData(parentId, channelId) {
        const replied = dataset.chat.messages.filter(message => {
            return (message.parent_id === parentId && message.channel_id === channelId);
        });

        return replied.map(message => {
            return UserApi.getUserData(message.user_id).username; 
        })
    }
}