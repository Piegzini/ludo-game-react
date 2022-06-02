import Switch from "../../molecules/Switch/Switch";
import PlayersBar from "../../organisms/PlayersBar/PlayersBar";
import {Container, Wrapper} from "./Lobby.styles";

import {socket} from "../../../helpers/constants";
import {setPlayers} from "../../../store/actions";
import {useDispatch} from "react-redux";


function Lobby() {
    const dispath = useDispatch()


    socket.on("UPDATE_LOBBY", (players) => {
        console.log('hej')
        dispath(setPlayers(players))
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
