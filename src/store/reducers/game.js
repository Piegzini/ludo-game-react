const gameReducer = (state = [], action) => {
    switch (action.type) {
        case "UPDATE_GAME":
            return action.payload
        case "UPDATE_AVAILABLE_MOVES":
            state.availableMoves = action.payload
            return state
        default:
            return state
    }

}

export default gameReducer
