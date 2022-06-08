import Station from "../../organisms/Station/Station";
import HorizontalPools from "../../organisms/HorizontalPools/HorizontalPools";
import VerticalPools from "../../organisms/VerticalPools/VerticalPools";
import {Container, Ludo} from "./Board.styles";
import {useState, useContext} from "react";
import {SocketContext} from "../../../context/socket";
import {useDispatch, useSelector} from "react-redux";
import {updateGame} from "../../../store/actions";


function Board() {
    const [turnTime, setTurnTime] = useState()
    const dispatch = useDispatch()
    const socket = useContext(SocketContext)
    const game = useSelector(state => state.game)

    socket.on("UPDATE_GAME", (game) => {
        console.log(game)
        dispatch(updateGame(game))
    })


    const handleRollNumber = () => {
        socket.emit("ROLL_NUMBER")
    }
    return (
        <Container>
            <button onClick={handleRollNumber}> Losuj</button>
            <h3 style={{color: 'white'}}>{game.rolledNumber}</h3>
            <Ludo>
                <Station color='royalBlue'/>
                <VerticalPools/>
                <Station color='red'/>
                <HorizontalPools/>
                <Station color="gold"></Station>
                <VerticalPools/>
                <Station color="green"></Station>
            </Ludo>

        </Container>

    )
}

export default Board
