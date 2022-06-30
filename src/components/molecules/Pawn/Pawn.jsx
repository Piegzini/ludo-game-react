import {Content, PawnWrapper} from "./Pawn.styles";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useContext} from "react";
import {SocketContext} from "../../../context/socket";
import stepSound from "../../../assets/audio/assets_audio_step.mp3"
import useSocket from "../../../context/useSocket";


function Pawn({id, color, position}) {

    const {emitMove} = useSocket()
    const user = useSelector(state => state.user)
    const game = useSelector(state => state.game)
    const [pawnId] = useState(id)

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
        emitMove(pawnId)
    }

    return (
        <PawnWrapper position={position}>
            <Content color={color} onClick={isAnimated ? handleClick : () => {
            }}
                     className={[isAnimated ? 'animation' : '', 'pawn']}/>
        </PawnWrapper>
    )
}

export default Pawn

