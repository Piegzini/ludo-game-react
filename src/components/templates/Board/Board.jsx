import styled from 'styled-components'
import Station from "../../organisms/Station/Station";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgb(32, 34, 56);
`
const Ludo = styled.div`
  width: 750px;
  height: 750px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: white;
`
const VerticalPools = styled.div`
  display: flex;
`

const Pool = styled.div`

  width: 48px;
  height: 48px;
  border: 1px solid black;
  font-size: 30px;
  text-align: center;

`


const HorizontalPools = styled.div`
  width: 750px;
  height: 150px;

  display: flex;
  justify-content: space-between;
`

const Row = styled.div`
  display: flex;
`


function Board() {

    const pools = [1, 2, 3, 4, 5, 6]
    return (
        <Container>
            <Ludo>
                <Station color='royalBlue'/>
                <VerticalPools>
                    <div>
                        {pools.map(() => <Pool></Pool>)}
                    </div>
                    <div>
                        {pools.map(() => <Pool></Pool>)}
                    </div>
                    <div>
                        {pools.map(() => <Pool></Pool>)}
                    </div>

                </VerticalPools>
                <Station color='red'/>
                <HorizontalPools>
                    <div>
                        <Row>
                            {pools.map(() => <Pool></Pool>)}
                        </Row>
                        <Row>
                            {pools.map(() => <Pool></Pool>)}
                        </Row>
                        <Row>
                            {pools.map(() => <Pool></Pool>)}
                        </Row>
                    </div>
                    <div>
                        <Row>
                            {pools.map(() => <Pool></Pool>)}
                        </Row>
                        <Row>
                            {pools.map(() => <Pool></Pool>)}
                        </Row>
                        <Row>
                            {pools.map(() => <Pool></Pool>)}
                        </Row>
                    </div>
                </HorizontalPools>
                <Station color="gold"></Station>
                <VerticalPools>
                    <div>
                        {pools.map(() => <Pool></Pool>)}
                    </div>
                    <div>
                        {pools.map(() => <Pool></Pool>)}
                    </div>
                    <div>
                        {pools.map(() => <Pool></Pool>)}
                    </div>

                </VerticalPools>
                <Station color="green"></Station>
            </Ludo>
        </Container>

    )
}

export default Board
