import Switch from "../../molecules/Switch/Switch";
import PlayersBar from "../../organisms/PlayersBar/PlayersBar";
import {Container, Wrapper} from "./Lobby.styles";

import {setPlayers, updateGame} from "../../../store/actions";
import {useDispatch,} from "react-redux";
import {useContext} from "react";
import {SocketContext} from "../../../context/socket";
import {useNavigate} from "react-router-dom";


function Lobby() {
    let navigate = useNavigate()

    const socket = useContext(SocketContext)
    const dispatch = useDispatch()

    socket.on("UPDATE_LOBBY", (players) => {
        dispatch(setPlayers(players))
    })

    socket.on("START_GAME", (game) => {
        socket.off("UPDATE_LOBBY")
        dispatch(updateGame(game))
        navigate('/game')

    })


    return (
        <Container>
            <Wrapper>
                <PlayersBar/>
                <Switch/>

            </Wrapper>
        </Container>


    )
}

export default Lobby
