function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomName(gender) {
    const maleNames = ['Jack', 'John', 'Tom', 'Chris', 'Alex'];
    const femaleNames = ['Emily', 'Emma', 'Olivia', 'Sophia', 'Ava'];
    const names = gender === 'male' ? maleNames : femaleNames;
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex] + getRandomNumber(1, 99);
}

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

export function createUsers() {
    const users = Array.from({ length: 30 }, (_, index) => ({
        id: getRandomNumber(100, 999),
        name: getRandomName(index % 2 === 0 ? 'male' : 'female'),
        status: Math.random() < 0.5 ? 'online' : 'offline',
        playingWith: null,
        playedGames: getRandomNumber(1, 1500),
        wonGames: 0,
        lostGames: 0,
        ranking: 0,
    }));
    users.forEach((user) => {
        const onlineUsers = users.filter((u) => u.status === 'online' && u.name !== user.name);
        const shuffledOnlineUsers = shuffleArray(onlineUsers);
        const playingWithUser = shuffledOnlineUsers[0];

        user.playingWith = user.status === 'online' ? playingWithUser.name : null;
        user.wonGames = getRandomNumber(1, user.playedGames);
        user.lostGames = user.playedGames - user.wonGames;
    });
    // I need arrange players into array which has first the most won games and last the least won.
    // I need run arranged array and assign index +1 to user as ranking
    const sortedUsers = users.slice().sort((a, b) => b.wonGames - a.wonGames);

    sortedUsers.forEach((u, i) => {
        u.ranking = i + 1;
    });

    return sortedUsers;
}
