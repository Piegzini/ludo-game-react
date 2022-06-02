import styled from "styled-components";

const Content = styled.div`
  height: 75%;
  width: 23%;
  border: 3px solid ${props => props.color || '#fff'};
  border-radius: 10px;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Nick = styled.p`
  font-size: 20px;
  margin: 0;
  padding: 5px 0 5px 0;
`

const Status = styled.p`
  font-size: 14px;
  margin: 0;
  padding: 5px 0 0 0;
`

export {Content, Nick, Status}