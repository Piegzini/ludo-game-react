import {useCallback, useContext, useEffect} from "react";
import {SocketContext} from "./socket";
import {setPlayers, setUser, updateGame} from "../store/actions";
import {useDispatch} from "react-redux";

const useSocket = () => {
    const socket = useContext(SocketContext)
    const dispatch = useDispatch()

    const joinLobby = useCallback(({user, players}) => {
        dispatch(setUser(user))
        dispatch(setPlayers(players))
    }, [])

    const updateLobby = useCallback((players) => dispatch(setPlayers(players)), [dispatch])


    const setGame = useCallback((game) => {
        socket.off("UPDATE_LOBBY")
        dispatch(updateGame(game))
    }, [])


    useEffect(() => {
        socket.removeAllListeners()
        socket.on('JOIN_LOBBY', joinLobby)
        socket.on('UPDATE_LOBBY', updateLobby)
        socket.on('START_GAME', setGame)
        socket.on('UPDATE_GAME', setGame)
    }, [])

    const emitJoinLobby = useCallback((nick) => socket.emit('CREATE_PLAYER', {nick}), [])

    const emitMove = useCallback((pawnId) => socket.emit("MOVE", {pawnId}), [])

    const emitChangeStatus = useCallback((isReady) => socket.emit('CHANGE_STATUS', {isReady: !isReady}), [])

    const emitRoll = useCallback(() => socket.emit('ROLL_NUMBER'), [])
    return {emitJoinLobby, emitMove, emitChangeStatus, emitRoll}
}

export default useSocket
