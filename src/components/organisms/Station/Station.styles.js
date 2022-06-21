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
  background-color: rgba(255, 255, 255, 0.4);
  width: 200px;
  height: 200px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`
const Pool = styled.div`
  box-sizing: border-box;
  width: 65px;
  height: 65px;
  margin: 15px;
  border: 5px solid ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;

`


export {Container, Wrapper, Pool}
