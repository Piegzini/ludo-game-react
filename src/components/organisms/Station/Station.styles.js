import styled from "styled-components";
import bat from '../../../assets/pawns/bat.png'
import frog from '../../../assets/pawns/frog.png'
import panda from '../../../assets/pawns/panda.png'
import tiger from '../../../assets/pawns/tiger.png'

const Container = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;


`
console.log(bat)
const Pool = styled.div`



  box-sizing: border-box;
  width: 65px;
  height: 65px;
  margin: 15px;
  border: 5px solid ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;


  &:nth-child(1) .pawn {
    background-image: url(${bat});
    background-size: cover;
  }

  &:nth-child(2) .pawn {
    background-image: url(${frog});
    background-size: cover;
  }

  &:nth-child(3) .pawn {
    background-image: url(${panda});
    background-size: cover;
  }

  &:nth-child(4) .pawn {
    background-image: url(${tiger});
    background-size: cover;
  }
`


export {Container, Wrapper, Pool}
