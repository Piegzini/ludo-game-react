import {FormHelperText, From, Label, NicknameInput, SubmitButton} from "./NicknameForm.styles";
import {useState} from "react";
import axios from "axios";
import {apiAddress} from '../../../helpers/constants'
import {useDispatch} from "react-redux";
import {setUser} from "../../../store/actions";
import {useNavigate} from "react-router-dom";

function NicknameForm() {
    let navigate = useNavigate()
    //store
    const dispath = useDispatch()
    //state
    const [isButtonActive, setIsButtonActive] = useState(true)
    const [nickname, setNickname] = useState('')

    const registerPlayer = async () => {
        if (!isButtonActive) return

        setIsButtonActive(false)
        const nickValidator = nickname.split(' ').join('');
        if (!nickValidator) {
            return
        }


        try {
            const {data} = await axios.post(`${apiAddress}/player`, {nick: nickname});
            dispath(setUser(data))
            navigate('/lobby')

        } catch (error) {
            console.log(error);
        }
        setIsButtonActive(true)

    }
    return (
        <From>
            <Label htmlFor="nick">Podaj nick</Label>
            <FormHelperText>Nick powinien mieć max 12 znaków</FormHelperText>
            <NicknameInput type="text" name="nick" required="required" autoComplete="off"
                           onChange={(e) => setNickname(e.target.value)}/>
            <SubmitButton onClick={registerPlayer}> GRAJ! </SubmitButton>
        </From>
    )
}


export default NicknameForm
