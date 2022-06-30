import {Content, Nick, Pawn, Status, Wrapper} from "./PlayersBar.styles";
import {useSelector} from "react-redux";
import {useState} from "react";
import {useEffect} from "react";


function PlayersBar() {
    const players = useSelector(state => state.players)
    const game = useSelector(state => state.game)


    const playerWithMove = game?.playerWithMove
    const [thisTurnColor, setThisTurnColor] = useState('')

    useEffect(() => {
        if (!game.isDuring) return
        const {color} = players.find((player) => player._id?.valueOf() === playerWithMove?.valueOf());
        setThisTurnColor(color)
    }, [game.playerWithMove])


    return (
        <Wrapper>
            {players.map(({nick, color, isReady, _id}) =>
                <Content key={_id} className={thisTurnColor === color ? 'animation' : ''}>
                    <Pawn color={color}/>
                    <Nick>{nick}</Nick>
                    {!game.isDuring ? <Status checked={isReady}/> : null}
                </Content>
            )}
        </Wrapper>
    )
}

export default PlayersBar
