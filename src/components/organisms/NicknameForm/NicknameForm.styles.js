import styled from "styled-components";

const From = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 360px;
  height: 200px;
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
`

const SubmitButton = styled.button`
  width: 150px;
  height: 35px;
  outline: none;
  border: 0;
  background-color: #2f3542;
  border: 1px #ffffff solid;
  color: #ffffff;
  font-size: 17px;
  border-radius: 3px;
  cursor: pointer;
`

export {SubmitButton, From, Label, FormHelperText, NicknameInput}
