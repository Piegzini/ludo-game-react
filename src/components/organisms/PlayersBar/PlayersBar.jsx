import {Content, Nick, Status, Wrapper} from "./PlayersBar.styles";
import {useSelector} from "react-redux";

function PlayersBar() {
    const players = useSelector(state => state.players)
    return (
        <Wrapper>
            {players.map(({nick, color, isReady, _id}) =>
                <Content color={color} key={_id}>
                    <Nick>{nick}</Nick>
                    <Status>{isReady ? 'Gotowy' : 'Nie gotowy'}</Status>
                </Content>
            )}
        </Wrapper>
    )
}

export default PlayersBar
