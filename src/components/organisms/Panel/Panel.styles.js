import styled from "styled-components";
import dice0 from "../../../assets/dice/dice0.png";
import dice1 from "../../../assets/dice/dice1.png";
import dice2 from "../../../assets/dice/dice2.png";
import dice3 from "../../../assets/dice/dice3.png";
import dice4 from "../../../assets/dice/dice4.png";
import dice5 from "../../../assets/dice/dice5.png";
import dice6 from "../../../assets/dice/dice6.png";

const Wrapper = styled.div`
  width: 400px;
  height: 650px;
  margin: 0 50px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  box-shadow: 0px 0px 32px -13px rgba(66, 68, 90, 1);
`

const Timer = styled.div`
  width: 70px;
  color: white;
  border-radius: 5px;
  font-size: 18px;
  margin: 10px 10px;
  padding: 10px 10px;
`

const Dice = styled.div`
  width: 90px;
  height: 90px;
  box-shadow: 0 0 49px -22px rgba(66, 68, 90, 1);
  background-image: url(${(props) => {
    switch (props.number) {
      case 1:
        return dice1
        break;
      case 2:
        return dice2
        break;
      case 3:
        return dice3
        break;
      case 4:
        return dice4
        break;
      case 5:
        return dice5
        break;
      case 6:
        return dice6
        break;
      default:
        return dice0
    }
  }});
  margin: auto;
  background-size: cover;
`

const Button = styled.button`
  width: 120px;
  height: 35px;
  outline: none;
  background-color: #32CD32;
  border: none;
  color: #ffffff;
  font-size: 17px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s;
  margin: 30px auto 10px;
  display: block;
  opacity: ${(props) => props.show ? '100%' : 0};

  &:hover {
    background-color: #1eb71e;
  }
`

export {Wrapper, Timer, Dice, Button}
