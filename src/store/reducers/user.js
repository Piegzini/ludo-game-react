const userDefault = {
    nick: '',
    color: '',
    id: '',
    gameId: ''
}

const userReducer = (state = userDefault, action) => {
    switch (action.type) {
        case "SET_USER":
            return action.payload
        default:
            return state
    }

}


export default userReducer
