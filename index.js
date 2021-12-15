
function superbowlWin(record) {
    const game = record.find(gameWon)
    if(game) {
        return game.year
    }
}

function gameWon(game){
    return game.result === "W";
}

