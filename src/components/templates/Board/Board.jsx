import Station from "../../organisms/Station/Station";
import HorizontalPools from "../../organisms/HorizontalPools/HorizontalPools";
import VerticalPools from "../../organisms/VerticalPools/VerticalPools";
import {Container, Ludo} from "./Board.styles";


function Board() {


    return (
        <Container>
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
