// Step 1

function gameObject () {
    const object = {
            home: {
                teamName: "Brooklyn Nets",
                colors: [
                    "black",
                    "white",
                ],
                players: {
                    "Alan Anderson": {
                        number: "0",
                        shoe: "16",
                        points: "22",
                        rebounds: "12",
                        assists: "12",
                        steals: "3",
                        blocks: "1",
                        slamDunks: "1",
                    },
                    "Reggie Evans": {
                        number: "30",
                        shoe: "14",
                        points: "12",
                        rebounds: "12",
                        assists: "12",
                        steals: "12",
                        blocks: "12",
                        slamDunks: "7",
                    },
                    "Brook Lopez": {
                        number: "11",
                        shoe: "17",
                        points: "17",
                        rebounds: "19",
                        assists: "10",
                        steals: "3",
                        blocks: "1",
                        slamDunks: "15",
                    },
                    "Mason Plumlee": {
                        number: "1",
                        shoe: "19",
                        points: "26",
                        rebounds: "12",
                        assists: "6",
                        steals: "3",
                        blocks: "8",
                        slamDunks: "5",
                    },
                    "Jason Terry": {
                        number: "31",
                        shoe: "15",
                        points: "19",
                        rebounds: "2",
                        assists: "2",
                        steals: "4",
                        blocks: "11",
                        slamDunks: "1",
                    },
                }
            },
            away: {
                teamName: "Charlotte Hornets",
                colors: [
                    "turquoise",
                    "purple",
                ],
                players: {
                    "Jeff Adrien": {
                        number: "4",
                        shoe: "18",
                        points: "10",
                        rebounds: "1",
                        assists: "1",
                        steals: "2",
                        blocks: "7",
                        slamDunks: "2",
                    },
                    "Bismak Biyombo": {
                        number: "0",
                        shoe: "16",
                        points: "12",
                        rebounds: "4",
                        assists: "7",
                        steals: "7",
                        blocks: "15",
                        slamDunks: "10",
                    },
                    "DeSagna Diop": {
                        number: "2",
                        shoe: "14",
                        points: "24",
                        rebounds: "12",
                        assists: "12",
                        steals: "4",
                        blocks: "5",
                        slamDunks: "5",
                    },
                    "Ben Gordon": {
                        number: "8",
                        shoe: "15",
                        points: "33",
                        rebounds: "3",
                        assists: "2",
                        steals: "1",
                        blocks: "1",
                        slamDunks: "0",
                    },
                    "Brendan Haywood": {
                        number: "33",
                        shoe: "15",
                        points: "6",
                        rebounds: "12",
                        assists: "12",
                        steals: "22",
                        blocks: "5",
                        slamDunks: "12",
                    },
                }
            },
                }
    return object;
}

console.log(gameObject());

// Function Building

function hasKey(obj, key) {
    return obj[key] !== undefined;
}

function numPointsScored(name) {
    const game = gameObject();
    let points;
    for (let gameKey in game) { // 1.home and 2.away
      let teamObj = game[gameKey]; //teamObj becomes [teamName, colors, players]
      let data = teamObj.players
      for (let key in data) { //cycles through the keys in players
            if (key === name) {
                points = data[name].points;
            }
      }
    }
    console.log("Points:", points)
    return points
  }

numPointsScored('Brook Lopez');

function shoeSize(name) {
    const game = gameObject();
    let shoeSizeVar;
    for (let gameKey in game) { // 1.home and 2.away
      let teamObj = game[gameKey]; //teamObj becomes [teamName, colors, players]
      let data = teamObj.players
      for (let key in data) { //cycles through the keys in players
            if (key === name) {
                shoeSizeVar = data[name].shoe;
            }
      }
    }
    console.log("Shoe Size:", shoeSizeVar)
    return shoeSizeVar
}

shoeSize('Reggie Evans');

function teamColors(team) {
    const game = gameObject();
    let teamNameVar;
    for (let gameKey in game) { // 1.home and 2.away
      let teamObj = game[gameKey]; //teamObj becomes [teamName, colors, players]
      if (teamObj.teamName === team) {
        console.log(teamObj.colors);
        return teamObj.colors;
      }
    }
}

teamColors('Charlotte Hornets');

function teamNames() {
    const game = gameObject();
    let teamNameArray = [];
    for (let gameKey in game) { 
        let teamObj = game[gameKey];
        teamNameArray.push(teamObj.teamName)
    }
    console.log("Team Names:", teamNameArray);
    return teamNameArray
}

teamNames();

function playerNumbers(team) {
    const game = gameObject();
    let playerNumberArray = [];
    for (let gameKey in game) { 
        let teamObj = game[gameKey];
        if (teamObj.teamName === team) {
            let data = teamObj.players;
            for (let key in data) {
                console.log(data[key].number);
                playerNumberArray.push(data[key].number);
            }
        }
    }
    console.log("Player Numbers:", playerNumberArray);
    return playerNumberArray;
}

playerNumbers('Brooklyn Nets');

function playerStats(name) {
    const game = gameObject();
    for (let gameKey in game) { // 1.home and 2.away
        let teamObj = game[gameKey]; //teamObj becomes [teamName, colors, players]
        let data = teamObj.players
        for (let key in data) {
            if (key === name) {
                console.log(data[key]);
                return data[key];
            }
        }
    }
}

playerStats('Mason Plumlee');

function bigShoeRebounds() {
    const game = gameObject();
    let playersMax;
    let shoeMax = 0;
    let reboundsMax;
    for (let gameKey in game) { // 1.home and 2.away
        let teamObj = game[gameKey]; //teamObj becomes [teamName, colors, players]
        let data = teamObj.players;
        for (let key in data) {
            const currentShoe = data[key].shoe;
            if (currentShoe > shoeMax) {
                playersMax = key;
                shoeMax = currentShoe;
                reboundsMax = data[playersMax].rebounds;
            }  
        }
    }
    return reboundsMax;
}

bigShoeRebounds();