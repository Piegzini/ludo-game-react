import {Content, PawnWrapper} from "./Pawn.styles";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useContext} from "react";
import {SocketContext} from "../../../context/socket";
import stepSound from "../../../assets/assets_audio_step.mp3"


function Pawn({id, color, position}) {
    const socket = useContext(SocketContext)


    const user = useSelector(state => state.user)
    const game = useSelector(state => state.game)
    const [pawnId, setPawnId] = useState(id)

    const playerWithMove = game.playerWithMove
    const [isAnimated, setIsAnimated] = useState(false)

    useEffect(() => {
        setIsAnimated(false)

        if (user.id.valueOf() !== playerWithMove.valueOf()) return
        const inAvailableMoves = game.availableMoves?.some(pawn => pawn.id === pawnId)
        const thisPlayerPawns = user.color === color


        setIsAnimated(inAvailableMoves && thisPlayerPawns)
    }, [game.availableMoves])

    const handleClick = () => {
        if (user.id !== playerWithMove) return
        const audio = new Audio(stepSound)
        audio.play()
        socket.emit("MOVE", {pawnId})
    }

    return (
        <PawnWrapper position={position}>
            <Content color={color} onClick={isAnimated ? handleClick : () => {
            }}
                     className={isAnimated ? 'animation' : ''}/>
        </PawnWrapper>
    )
}

export default Pawn

