import dataset from './dataset';


export default UserApi = {
    getCurrentUser() {
        return this.getUserData(dataset.user.id);
    }, 
    getUserData(id) {
        return dataset.users.find(user => user.id === id);
    },
    getUsersData() {
        return dataset.users;
    }
}