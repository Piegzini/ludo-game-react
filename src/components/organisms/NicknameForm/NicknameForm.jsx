import {FormHelperText, From, Label, NicknameInput, SubmitButton} from "./NicknameForm.styles";
import {useContext, useState} from "react";
import {useDispatch} from "react-redux";
import {setPlayers, setUser} from "../../../store/actions";
import {useNavigate} from "react-router-dom";
import {SocketContext} from "../../../context/socket";


function NicknameForm() {
    const socket = useContext(SocketContext)

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
            <Label htmlFor="nick">Pass your nick</Label>
            <FormHelperText>Nick should have maximum 12 characters</FormHelperText>
            <NicknameInput type="text" name="nick" required="required" autoComplete="off"
                           onChange={(e) => setNick(e.target.value)}/>
            <SubmitButton onClick={registerPlayer}> Start </SubmitButton>
        </From>
    )
}


export default NicknameForm
