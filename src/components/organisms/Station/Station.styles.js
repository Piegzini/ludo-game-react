import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.color};
`

const Wrapper = styled.div`
  background-color: white;
  width: 200px;
  height: 200px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`
const Pool = styled.div`
  width: 60px;
  height: 60px;
  margin: 20px;
  background: ${(props) => props.color};

`

const PawnWrapper = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Pawn = styled.div`
  width: 40px;
  height: 40px;
  background-color: red;
  border-radius: 20px

`

export {Container, Wrapper, Pool}
