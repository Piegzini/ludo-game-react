import Station from "../../organisms/Station/Station";
import {Container, Ludo} from "./Board.styles";
import {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import Panel from "../../organisms/Panel/Panel";
import diceSound from "../../../assets/audio/assets_audio_dice.mp3"
import useSocket from "../../../context/useSocket";

function Board() {
    const [turnTime, setTurnTime] = useState('')
    const game = useSelector(state => state.game)
    const {emitRoll} = useSocket()

    const updateTimer = () => {
        setTurnTime(prevState => prevState <= 0 ? prevState : prevState - 1)
    }

    const handleRollNumber = () => {
        const audio = new Audio(diceSound)
        audio.play()
        emitRoll()
    }

    useEffect(() => {
        const timer = setInterval(updateTimer, 1000)
        return () => clearInterval(timer);
    }, [])

    useEffect(() => {
        if (game.newTurn) {
            setTurnTime(game.turnTime)
        }
    }, [game])


    return (
        <Container>

            <Ludo>
                <Station color='royalBlue'/>
                <Station color='red'/>
                <Station color="gold"/>
                <Station color="green"/>
            </Ludo>
            <Panel handleRoll={handleRollNumber} time={turnTime} rolledNumber={game.rolledNumber}/>

        </Container>

    )
}

export default Board
