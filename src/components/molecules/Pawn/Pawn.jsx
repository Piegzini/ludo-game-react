import {Content, PawnWrapper} from "./Pawn.styles";
import {useSelector} from "react-redux";


function Pawn({pawnId, color, absolute}) {
    const user = useSelector(state => state.user)
    const playerWithMove = useSelector(state => state.game.playerWithMove)
    const handleClick = () => {
        if (user.id !== playerWithMove._id) return
        console.log(pawnId, color)
    }
    return (
        <PawnWrapper absolute={absolute}>
            <Content color={color} onClick={handleClick}/>
        </PawnWrapper>
    )
}

export default Pawn

