import Switch from "../../molecules/Switch/Switch";
import PlayersBar from "../../organisms/PlayersBar/PlayersBar";
import {Container, Wrapper} from "./Lobby.styles";

import {setPlayers} from "../../../store/actions";
import {useDispatch,} from "react-redux";
import {useCallback, useContext} from "react";
import {SocketContext} from "../../../context/socket";


function Lobby() {


    const socket = useContext(SocketContext)
    const dispatch = useDispatch()

    socket.on("UPDATE_LOBBY", (players) => {
        console.log(players)
        dispatch(setPlayers(players))
    })


    return (
        <Container>
            <Wrapper>
                <Switch/>
                <PlayersBar/>
            </Wrapper>
        </Container>


    )
}

export default Lobby
