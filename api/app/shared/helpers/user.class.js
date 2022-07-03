class User {
    constructor() {
        this.globalArray = [];
    }

    enterRoom(socketId, name, room) {
        const user = { id: socketId, name, room };
        this.globalArray.push(user);
        return user;
    }

    getUserId(socketId) {
        return this.globalArray.filter((userId) => (userId.id === socketId)[0]);
    }

    removeUser(socketId) {
        const user = this.getUserId(socketId);
        if (user) {
            this.globalArray = this.globalArray.filter((user) => user.id !== socketId);
        }
        return user;
    }

    getUsersList(room) {
        return this.globalArray.filter((user) => user.room === room).map((user) => user.name);
    }
}

module.exports = { User };
