import PlayersBar from "../PlayersBar/PlayersBar";
import {Button, Dice, Timer, Wrapper} from "./Panel.styles";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";


function Panel({handleRoll, time, rolledNumber}) {
    const game = useSelector(state => state.game)
    const playerWithMove = game?.playerWithMove
    const user = useSelector(state => state.user)
    const [showButton, setShowButton] = useState(playerWithMove.valueOf() === user.id.valueOf())

    useEffect(() => {
        const show = playerWithMove.valueOf() === user.id.valueOf()
        setShowButton(show)
    }, [game.playerWithMove])

    return (
        <Wrapper>
            <Timer>00:00:{time < 10 ? "0" + time : time}</Timer>
            <Dice number={rolledNumber}/>
            <Button onClick={handleRoll} show={showButton}>Roll</Button>
            <PlayersBar/>
        </Wrapper>
    )

}

export default Panel
