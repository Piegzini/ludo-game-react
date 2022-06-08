export const setUser = (user) => {
    return {type: "SET_USER", payload: user}
}

export const setPlayers = (player) => {
    return {type: "SET_PLAYERS", payload: player}
}

export const updateGame = (game) => {
    return {type: "UPDATE_GAME", payload: game}

}

export const updateAvailableMoves = (moves) => {
    return {type: "UPDATE_AVAILABLE_MOVES", payload: moves}

}

