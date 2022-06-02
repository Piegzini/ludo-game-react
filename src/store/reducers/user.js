const userDefault = {
    nick: '',
    color: '',
    id: '',
    gameId: ''
}

const userReducer = (state = userDefault, action) => {
    switch (action.type) {
        case "SET_USER":
            return {...state, ...action.payload}
        default:
            return state
    }

}


export default userReducer
