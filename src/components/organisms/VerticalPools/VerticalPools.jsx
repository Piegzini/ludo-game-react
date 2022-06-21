import {Pool} from "../../templates/Board/Board.styles";


const numberOfPools = [0, 1, 2, 3, 4, 5,]


function VerticalPools({color}) {
    return (
        <div style={{display: 'flex', flexDirection: color === 'gold' ? 'row-reverse' : "row"}}>
            <div style={{
                display: 'flex',
                flexDirection: color === 'gold' ? 'column-reverse' : "column"
            }}>
                {numberOfPools.map((row) => <Pool color={"white"}/>)}
            </div>

            <div style={{
                display: 'flex',
                flexDirection: color === 'gold' ? 'column-reverse' : "column"
            }}>
                {numberOfPools.map((row) => <Pool color={row !== 0 ? color : 'white'}/>)}
            </div>

            <div style={{
                display: 'flex',
                flexDirection: color === 'gold' ? 'column-reverse' : "column"
            }}>
                {numberOfPools.map((row) => <Pool color={row === 1 ? color : 'white'}/>)}
            </div>


        </div>

    )
}

export default VerticalPools
