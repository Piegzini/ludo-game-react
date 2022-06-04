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

export {Container, Wrapper, Pool}
