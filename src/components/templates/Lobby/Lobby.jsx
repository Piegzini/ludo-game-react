import Switch from "../../molecules/Switch/Switch";
import PlayersBar from "../../organisms/PlayersBar/PlayersBar";
import {Container, Wrapper} from "./Lobby.styles";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";


function Lobby() {
    const inGame = useSelector(state => state.game.isDuring)
    let navigate = useNavigate()

    useEffect(() => {
        if (!inGame) return
        navigate('/game')
    }, [inGame])
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
