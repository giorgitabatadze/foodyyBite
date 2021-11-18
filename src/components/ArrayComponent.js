const DATA = [
    {
        id: '1',
        title: 'Happy Bones',
        img: 'https://images.unsplash.com/photo-1613733895930-4a51e90d50fe?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
        op: 'OPEN',
        star: 4.5,
        name: 'Italian',
        frImage:
            'https://images.unsplash.com/photo-1619379973074-81e0c85d721d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NTMzOTQ3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
    },
    {
        id: '2',
        title: 'Second Item',
        img: 'https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/2KL6JYQYH4I6REYMIWBYVUGXPI.jpg',
        op: 'CLOSE',
        star: 4.2,
        name: 'Arabian',
        frImage:
            'https://images.unsplash.com/photo-1619385859058-7bfe5029e615?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NTMzNDY3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200',
    },
    {
        id: '3',
        title: 'Third Item',
        img: 'https://images.unsplash.com/photo-1616372383709-de2bc15e3dee?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
        op: 'OPEN',
        star: 3.5,
        name: 'Korean',
        frImage:
            'https://images.unsplash.com/photo-1619378087011-9781c44d35e4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NTM2Nzcw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
    },
    {
        id: '4',
        title: 'fours Item',
        img: 'https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/2KL6JYQYH4I6REYMIWBYVUGXPI.jpg',
        op: 'CLOSE',
        star: 4.2,
        name: 'Arabian',
        frImage:
            'https://images.unsplash.com/photo-1619488016341-b86418ab3618?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NTM2ODE3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
    },
    {
        id: '5',
        title: 'Happy Bones',
        img: 'https://images.unsplash.com/photo-1613733895930-4a51e90d50fe?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
        op: 'OPEN',
        star: 4.5,
        name: 'Italian',
        frImage:
            'https://images.unsplash.com/photo-1619379973074-81e0c85d721d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NTMzOTQ3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
    },
    {
        id: '6',
        title: 'Second Item',
        img: 'https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/2KL6JYQYH4I6REYMIWBYVUGXPI.jpg',
        op: 'CLOSE',
        star: 4.2,
        name: 'Arabian',
        frImage:
            'https://images.unsplash.com/photo-1619385859058-7bfe5029e615?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NTMzNDY3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200',
    },
    {
        id: '7',
        title: 'Third Item',
        img: 'https://images.unsplash.com/photo-1616372383709-de2bc15e3dee?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
        op: 'OPEN',
        star: 3.5,
        name: 'Korean',
        frImage:
            'https://images.unsplash.com/photo-1619385859058-7bfe5029e615?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NTMzNDY3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200',
    },
    {
        id: '8',
        title: 'fours Item',
        img: 'https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/2KL6JYQYH4I6REYMIWBYVUGXPI.jpg',
        op: 'CLOSE',
        star: 4.2,
        name: 'Arabian',
        frImage:
            'https://images.unsplash.com/photo-1619385859058-7bfe5029e615?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NTMzNDY3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200',
    },
    {
        id: '9',
        title: 'fours Item',
        img: 'https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/2KL6JYQYH4I6REYMIWBYVUGXPI.jpg',
        op: 'CLOSE',
        star: 4.2,
        name: 'Thai',
        frImage:
            'https://images.unsplash.com/photo-1619385859058-7bfe5029e615?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NTMzNDY3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200',
    },
    {
        id: '10',
        title: 'fours Item',
        img: 'https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/2KL6JYQYH4I6REYMIWBYVUGXPI.jpg',
        op: 'CLOSE',
        star: 4.2,
        name: 'Thai',
        frImage:
            'https://images.unsplash.com/photo-1619385859058-7bfe5029e615?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5NTMzNDY3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200',
    },

];