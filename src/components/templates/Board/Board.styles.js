import styled from "styled-components";

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
  position: relative;
`

const Pool = styled.div`
  box-sizing: border-box;
  width: 50px;
  height: 50px;
  border: 1px solid black;
  font-size: 30px;
  text-align: center;
  border-collapse: collapse;
  background-color: ${(props) => props.color};
`

export {Pool, Container, Ludo}
