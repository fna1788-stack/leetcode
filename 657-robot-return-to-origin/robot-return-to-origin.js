/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    let x = 0
    let y = 0
    for (let i = 0; i < moves.length; i++) {
        if (moves[i] === "U") {
            x += 1
        }
        else if (moves[i] === "D") {
            x -= 1
        }
        else if (moves[i] === "L") {
            y -= 1
        }
        else if (moves[i] === "R") {
            y += 1
        }
    }

    if (x === 0 && y === 0) {
        return true
    } else {
        return false
    }
};