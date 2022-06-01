import styled from "styled-components";

const Wrapper = styled.div`
  margin: 10px 20px 5px 0;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const SwitchBox = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

`

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #a4b0be;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: #f1f2f6;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  ${SwitchInput}:checked + & {
    background-color: #5352ed;
  }

  ${SwitchInput}:checked + &:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`
const FormHelperText = styled.p`
  margin: 0 0 20px 0;
  font-size: 13px;
  padding: 5px;
  color: #ffffff;
`

export {SwitchInput, Slider, SwitchBox, FormHelperText, Wrapper}
