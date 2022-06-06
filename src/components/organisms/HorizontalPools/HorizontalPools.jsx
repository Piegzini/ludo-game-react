import {Pool} from "../../templates/Board/Board.styles";
import {Wrapper} from "./HorizontalPools.styles";

const numberOfRows = new Array(3).fill(0)
const numberOfPools = new Array(6).fill(0)


function HorizontalPools() {
    return (
        <Wrapper>
            <div>
                {numberOfRows.map(() => {
                        return (
                            <div style={{display: 'flex'}}> {numberOfPools.map(() => <Pool/>)}</div>)
                    }
                )}
            </div>
            <div>
                {numberOfRows.map(() => {
                        return (
                            <div style={{display: 'flex'}}> {numberOfPools.map(() => <Pool/>)}</div>)
                    }
                )}
            </div>
        </Wrapper>

    )
}

export default HorizontalPools
