function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  function generateRandomName(gender) {
    const maleNames = ['John', 'James', 'David', 'Michael', 'Robert'];
    const femaleNames = ['Mary', 'Lisa', 'Susan', 'Karen', 'Jennifer'];
  
    const names = gender === 'male' ? maleNames : femaleNames;
    const randomName = names[getRandomNumber(0, names.length - 1)];
    const randomNumber = getRandomNumber(1, 99);
  
    return randomName + randomNumber;
  }
  
  function generateUsers() {
    const genders = ['male', 'female'];
    const users = [];
  
    for (let i = 0; i < 30; i++) {
      const gender = genders[getRandomNumber(0, 1)];
      const name = generateRandomName(gender);
  
      const status = getRandomNumber(0, 1) ? 'online' : 'offline';
  
      let playingWith = null;
      if (status === 'online') {
        do {
          playingWith = generateRandomName(gender === 'male' ? 'female' : 'male');
        } while (playingWith === name); // Ensure playingWith is not the same as the current user
      }
  
      const playedGames = getRandomNumber(1, 1500);
      const wonGames = getRandomNumber(1, playedGames);
      const lostGames = playedGames - wonGames;
  
      const ranking = getRandomNumber(1, 30);
  
      users.push({
        name,
        status,
        playingWith,
        playedGames,
        wonGames,
        lostGames,
        ranking,
      });
    }
  
    return users;
  }
  
  const users = generateUsers();
  console.log(JSON.stringify(users, null, 2));
  
  