import {FormHelperText, From, Label, NicknameInput, SubmitButton} from "./NicknameForm.styles";
import {useState} from "react";
import axios from "axios";
import {apiAddress} from '../../../helpers/constants'
import PropTypes from 'prop-types';

function NicknameForm({actionAfterSuccess}) {
    const [nickname, setNickname] = useState('')
    const registerPlayer = async () => {
        const nickValidator = nickname.split(' ').join('');
        if (!nickValidator) {
            return
        }


        try {
            const response = await axios.post(`${apiAddress}/player`, {});
            actionAfterSuccess()
        } catch (error) {
            console.log(error);
        }

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

NicknameForm.propTypes = {
    actionAfterSuccess: PropTypes.func.isRequired

}

export default NicknameForm
