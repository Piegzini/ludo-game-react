import {Pool} from "../../templates/Board/Board.styles";
import {Wrapper} from "./HorizontalPools.styles";

const numberOfRows = [0, 1, 2]
const numberOfPools = [0, 1, 2, 3, 4, 5]


function HorizontalPools() {
    return (
        <Wrapper>
            <div>
                {numberOfRows.map((row) => {
                        return (
                            <div style={{display: 'flex'}}> {numberOfPools.map((col) => <Pool
                                color={(row === 1 && col !== 0) || (row === 0 && col === 1) ? "royalBlue" : 'white'}/>)}</div>)
                    }
                )}
            </div>
            <div>
                {numberOfRows.map((row) => {
                        return (
                            <div style={{display: 'flex'}}> {numberOfPools.map((col) => <Pool
                                color={(row === 1 && col !== 5) || (row === 2 && col === 4) ? "green" : 'white'}/>)}</div>)
                    }
                )}
            </div>
        </Wrapper>

    )
}

export default HorizontalPools
