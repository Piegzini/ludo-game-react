import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: transparent;
  backdrop-filter: blur(5px);
`
const Ludo = styled.div`
  width: 750px;
  height: 750px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  box-shadow: 0px 0px 16px 1px rgba(66, 68, 90, 1);
`

const Pool = styled.div`
  box-sizing: border-box;
  width: 50px;
  height: 50px;
  border: 1px solid black;
  font-size: 30px;
  text-align: center;
  border-collapse: collapse;
  background-color: ${(props) => props.color !== 'white' ? props.color : 'rgba(0, 0, 0, 0.30)'};
`

export {Pool, Container, Ludo}
