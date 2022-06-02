import {FormHelperText, From, Label, NicknameInput, SubmitButton} from "./NicknameForm.styles";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setPlayers, setUser} from "../../../store/actions";
import {useNavigate} from "react-router-dom";
import {socket} from "../../../helpers/constants";


function NicknameForm() {
    let navigate = useNavigate()
    //store
    const dispath = useDispatch()
    //state
    const [isButtonActive, setIsButtonActive] = useState(true)
    const [nick, setNick] = useState('')

    socket.on('JOIN_LOBBY', ({user, players}) => {
        dispath(setUser(user))
        dispath(setPlayers(players))
        navigate('/lobby')
    })

    const registerPlayer = () => {
        if (!isButtonActive) return

        setIsButtonActive(false)
        const nickValidator = nick.split(' ').join('');

        if (!nickValidator) {
            return
        }

        socket.emit('CREATE_PLAYER', {nick})

        setIsButtonActive(true)

    }
    return (
        <From>
            <Label htmlFor="nick">Podaj nick</Label>
            <FormHelperText>Nick powinien mieć max 12 znaków</FormHelperText>
            <NicknameInput type="text" name="nick" required="required" autoComplete="off"
                           onChange={(e) => setNick(e.target.value)}/>
            <SubmitButton onClick={registerPlayer}> GRAJ! </SubmitButton>
        </From>
    )
}


export default NicknameForm
