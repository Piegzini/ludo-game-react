import {Container, Pool, Wrapper} from "./Station.styles";
import Pawn from "../../molecules/Pawn/Pawn";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";


const pawns = ['first', 'second', 'third', 'fourth',]

function Station({color}) {
    const players = useSelector(state => state.players)

    const [arePawnsOnBoard, setArePawnsOnBoard] = useState(false)
    useEffect(() => {
            const playerWithThisColorInGame = players.some(player => player.color === color)
            setArePawnsOnBoard(playerWithThisColorInGame)
        }, []
    )
    return (
        <Container color={color}>
            <Wrapper>
                {
                    pawns.map(id =>
                        <Pool color={color}>
                            {arePawnsOnBoard ? <Pawn absolute={false} color={color} pawnId={id}
                                                     key={id}></Pawn> : null}
                        </Pool>)
                }

            </Wrapper>
        </Container>
    )
}

export default Station
