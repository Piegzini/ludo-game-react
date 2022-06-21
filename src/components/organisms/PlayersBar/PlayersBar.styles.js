import styled, {keyframes} from "styled-components";
import checked from '../../../assets/checked.png'

const Wrapper = styled.div`
  height: 60%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const breatheAnimation = keyframes`
  0% {
    filter: opacity(100%);

  }

  50% {
    filter: opacity(10%);

  }
`

const Content = styled.div`
  height: 20%;
  width: 70%;
  text-align: center;
  margin-top: 10px;
  display: flex;
  border-bottom: 1px solid white;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  color: white;

  &.animation {
    animation-name: ${breatheAnimation};
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
`

const Pawn = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid white;
  border-radius: 20px;
  background-color: ${(props) => props.color}


`

const Nick = styled.p`
  font-size: 15px;
  margin: 0;
  padding: 5px 0 5px 0;
  width: 40%;
`

const Status = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${(props) => props.checked ? checked : ''});
  background-size: cover;
`

export {Content, Nick, Status, Wrapper, Pawn}


