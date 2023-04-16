import { makeMove, possibleMoves, updateStatusGame } from '../Controller/controller';

export function makeGreen(id, playerLogin, x, y, color) {
    let request = possibleMoves(id, playerLogin, x, y);

    request.then(res => res.map(pair => {
        let cellId = pair[0] + "_" + pair[1]
        document.getElementById(cellId).classList.add("green");
    }));
}

export function removeGreen() {
    for (let i = 0; i < 8; ++i) 
        for (let j = 0; j < 8; ++j)    
            document.getElementById(i+"_"+j).classList.remove("green")
}