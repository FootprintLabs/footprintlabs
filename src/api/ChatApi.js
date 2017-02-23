import dataset from './dataset';
import Icons from '../images';

export default ChatApi = {
    getMessages() {
        return dataset.chat.messages;
    }
}