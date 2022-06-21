import Station from "../../organisms/Station/Station";
import HorizontalPools from "../../organisms/HorizontalPools/HorizontalPools";
import VerticalPools from "../../organisms/VerticalPools/VerticalPools";
import {Container, Ludo} from "./Board.styles";
import {useState, useContext, useEffect, useCallback} from "react";
import {SocketContext} from "../../../context/socket";
import {useDispatch, useSelector} from "react-redux";
import {updateGame} from "../../../store/actions";
import Panel from "../../organisms/Panel/Panel";
import diceSound from "../../../assets/assets_audio_dice.mp3"

function Board() {
    const [turnTime, setTurnTime] = useState('')
    const dispatch = useDispatch()
    const socket = useContext(SocketContext)
    const game = useSelector(state => state.game)

    socket.on("UPDATE_GAME", (_game) => {
        if (_game.newTurn) {
            setTurnTime(_game.turnTime)
        }
        dispatch(updateGame(_game))
    })

    const updateTimer = () => {
        setTurnTime(prevState => prevState <= 0 ? prevState : prevState - 1)
    }

    useEffect(() => {
        const timer = setInterval(updateTimer, 1000)
        return () => clearInterval(timer);
    }, [])


    const handleRollNumber = () => {
        const audio = new Audio(diceSound)
        audio.play()
        socket.emit("ROLL_NUMBER")
    }
    return (
        <Container>

            <Ludo>
                <Station color='royalBlue'/>
                <VerticalPools color="red"/>
                <Station color='red'/>
                <HorizontalPools/>
                <Station color="gold"></Station>
                <VerticalPools color="gold"/>
                <Station color="green"></Station>
            </Ludo>
            <Panel handleRoll={handleRollNumber} time={turnTime} rolledNumber={game.rolledNumber}/>

        </Container>

    )
}

export default Board
