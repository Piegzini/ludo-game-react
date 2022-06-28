import {Container, Pool, Wrapper} from "./Station.styles";
import Pawn from "../../molecules/Pawn/Pawn";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";


function Station({color}) {

    const game = useSelector(state => state.game)

    const [arePawnsOnBoard, setArePawnsOnBoard] = useState(false)
    const [player, setPlayer] = useState()
    useEffect(() => {
            const {players} = game
            const playerWithThisColorInGame = players.some(player => player.color === color)

            const playerWithThisColor = players.find(player => player.color === color)

            setArePawnsOnBoard(playerWithThisColorInGame)
            setPlayer(playerWithThisColor)
        }, [game]
    )
    return (
        <Container>
            <Wrapper>
                {
                    player ? player.pawns.map(({id, position}) =>
                        <Pool color={color} key={id}>
                            {
                                arePawnsOnBoard ? <Pawn position={position} color={color} id={id}
                                                        key={id}></Pawn> : null}
                        </Pool>) : null
                }

            </Wrapper>
        </Container>
    )
}

export default Station
