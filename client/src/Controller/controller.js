// const url = "https://localhost:8080/api/game"
const url = "https://uhov164.ru:8080/api/game"

export async function updateStatusGame(gameId, playerId){
    const data = {gameId, playerId}
    const {id, field, yourColor} = await fetch(url + "/getGameStatus", {
        // mode: "no-cors",
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    // .then(data => console.log(data))
    return {field, yourColor};
}   

export async function makeMove(gameId, playerLogin, newX, newY, oldX, oldY) {
    const data = {gameId, playerLogin, newX, newY, oldX, oldY};
    const {field, gameID, whoseMove} = await fetch(url + "/makeMove", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(data)
    })
    .then(res => {
        if (res.status >= 200 && res.status < 300){
            return res;
        } else {
            let error = new Error('Неверный шаг брат');
            throw error;
        }
    })
    .then(res => res.json())
    .catch();

    return field;
}   

export async function possibleMoves(gameId, playerLogin, x, y) {
    const data = {gameId, playerLogin, x, y};
    const array = await fetch(url + "/possibleMoves", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(data)
    })
    .then(res => res.json());

    return array;
}