import styled from "styled-components";

const PawnWrapper = styled.div`
  position: ${(props) => props.absolute};
  width: 50px;
  height: 50px;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.color};
  border-radius: 40px;
  border: 2px solid #eee;
`

export {PawnWrapper, Content}
