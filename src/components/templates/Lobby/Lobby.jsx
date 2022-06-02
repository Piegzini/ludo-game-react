import Switch from "../../molecules/Switch/Switch";
import PlayersBar from "../../organisms/PlayersBar/PlayersBar";
import {Container, Wrapper} from "./Lobby.styles";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect} from "react";


function Lobby() {
    let navigate = useNavigate()
    const user = useSelector(state => state.user)

    useEffect(() => {
        if (user.id) return

        navigate("/", {replace: true});

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
