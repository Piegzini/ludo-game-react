import {Container, Pool, Wrapper} from "./Station.styles";

function Station({color}) {
    return (
        <Container color={color}>
            <Wrapper>
                <Pool color={color}></Pool>
                <Pool color={color}></Pool>
                <Pool color={color}></Pool>
                <Pool color={color}></Pool>
            </Wrapper>
        </Container>
    )
}

export default Station
