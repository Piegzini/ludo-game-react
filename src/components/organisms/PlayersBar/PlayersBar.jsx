import {Wrapper} from "./PlayersBar.styles";
import {useSelector} from "react-redux";
import PlayerCard from "../../molecules/PlayerCard/PlayerCard";

function PlayersBar() {
    const players = useSelector(state => state.players)
    return (
        <Wrapper>
            {players.map(({nick, color, isReady, _id}) => <PlayerCard nick={nick} color={color}
                                                                      isReady={isReady}
                                                                      key={_id}/>)}
        </Wrapper>
    )
}

export default PlayersBar
