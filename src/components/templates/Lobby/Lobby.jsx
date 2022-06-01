import Switch from "../../molecules/Switch/Switch";
import PlayersBar from "../../organisms/PlayersBar/PlayersBar";
import {Container, Wrapper} from "./Lobby.styles";


function Lobby() {
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
