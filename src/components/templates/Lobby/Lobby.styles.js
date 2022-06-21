import styled from "styled-components";

const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  width: 100vw;
  height: 100vh;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: rgba(0, 0, 0, 0.33);
  width: 400px;
  height: 500px;
  border-radius: 20px;
`

export {Container, Wrapper}
