import styled from "styled-components";

const From = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 380px;
  height: 450px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.33);
  filter: alpha(opacity=90);

`

const Label = styled.label`
  padding: 10px;
  color: #ffffff;
  font-size: 30px;
  margin-bottom: 10px;
`

const FormHelperText = styled.p`
  margin: 0 0 20px 0;
  font-size: 13px;
  padding: 5px;
  color: #ffffff;

`

const NicknameInput = styled.input`
  border-radius: 0;
  outline: none;
  background: transparent;
  border: 0;
  padding-bottom: 5px;
  border-bottom: 1px #ffffff solid;
  margin-bottom: 25px;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  width: 50%;
  transition: all 0.3s;

  &:focus {
    width: 60%;
  }

`

const SubmitButton = styled.button`
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

  &:hover {
    background-color: #1eb71e;
  }
`

export {SubmitButton, From, Label, FormHelperText, NicknameInput}
