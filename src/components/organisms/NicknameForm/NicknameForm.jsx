import {FormHelperText, From, Label, NicknameInput, SubmitButton} from "./NicknameForm.styles";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import useSocket from "../../../context/useSocket";
import players from "../../../store/reducers/players";


function NicknameForm() {
    const playersCount = useSelector(state => state.players.length)
    const {emitJoinLobby} = useSocket()
    let navigate = useNavigate()

    const [isButtonActive, setIsButtonActive] = useState(true)
    const [nick, setNick] = useState('')


    useEffect(() => {
            if (playersCount <= 0) return
            navigate('/lobby')
        }, [playersCount]
    )

    const registerPlayer = () => {
        if (!isButtonActive) return

        setIsButtonActive(false)
        const nickValidator = nick.split(' ').join('');

        if (!nickValidator) return


        emitJoinLobby(nick)
        setIsButtonActive(true)
    }
    return (
        <From>
            <Label htmlFor="nick">Pass your nick</Label>
            <FormHelperText>Nick should have maximum 12 characters</FormHelperText>
            <NicknameInput type="text" name="nick" required="required" autoComplete="off"
                           onChange={(e) => setNick(e.target.value)}/>
            <SubmitButton onClick={registerPlayer}> Start </SubmitButton>
        </From>
    )
}


export default NicknameForm
