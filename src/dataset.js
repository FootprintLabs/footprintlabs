export default dataset = {
    user: {
        id: 1,
        avatar: require('./assets/images/user-avatars/user-photo-1.png'),
        username: "Marion Diaz"
    },
    chat: {
        messages: [
            {
                id: 1,
                isReply: false,
                avatar: require('./assets/images/user-avatars/user-photo-1.png'),
                username: 'Marion Diaz',
                time: '1d',
                text: 'Snowboarding is a sport or hobby that people usually do.',
                replies: ['Danny Fortune']
            }, {
                id: 2,
                isReply: true,
                avatar: require('./assets/images/user-avatars/user-photo-2.png'),
                username: 'Danny Fortune',
                time: '1d',
                text: `I've been doing CroffFit for less than a year.`,
                replies: []
            }, {
                id: 3,
                isReply: false,
                avatar: require('./assets/images/user-avatars/user-photo-3.png'),
                username: 'Christina Haynes',
                time: '1d',
                text: `I fell in love with CrossFit... Because it made me challenge myself to what I didn't think I could do.`,
                replies: []
            }
        ]
    }
}