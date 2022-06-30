import styled from "styled-components";
import board from "../../../assets/backgrounds/board.png"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: transparent;
  backdrop-filter: blur(5px);
`
const Ludo = styled.div`
  min-width: 750px;
  width: 750px;
  height: 750px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 150px;
  position: relative;
  box-shadow: 0px 0px 16px 1px rgba(66, 68, 90, 1);
  background-image: url(${board});
  background-size: contain;
  background-repeat: no-repeat;

 
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
