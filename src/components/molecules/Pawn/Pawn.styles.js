import styled, {keyframes} from "styled-components";

const PawnWrapper = styled.div`
  position: ${(props) => props?.position === 'base' ? 'relative' : 'absolute'};
  width: 50px;
  height: 50px;
  top: ${(props) => props?.position.top}px;
  left: ${(props) => props?.position.left}px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const breatheAnimation = keyframes`
  0% {
    filter: opacity(100%);
  }

  50% {
    filter: opacity(25%);
  }
`

const Content = styled.div`
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.color};
  border-radius: 40px;
  border: 2px solid #eee;

  &.animation {
    animation-name: ${breatheAnimation};
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
`

export {PawnWrapper, Content}
