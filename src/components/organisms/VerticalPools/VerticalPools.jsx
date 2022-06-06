import {Pool} from "../../templates/Board/Board.styles";
import styled from "styled-components";


const numberOfRows = new Array(3).fill(0)
const numberOfPools = new Array(6).fill(0)

const Box = styled.div`
  display: flex
`

function VerticalPools() {
    return (
        <Box>
            {numberOfRows.map(() => {
                    return (<div> {numberOfPools.map(() => <Pool/>)}</div>)
                }
            )}
        </Box>

    )
}

export default VerticalPools
