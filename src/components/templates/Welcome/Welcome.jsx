import {Wrapper} from "./Welcome.styles";
import NicknameForm from "../../organisms/NicknameForm/NicknameForm";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";


function Welcome() {
    let navigate = useNavigate()
    const user = useSelector(state => state.user)

    useEffect(() => {
        if (!user.id) return

        navigate("/lobby", {replace: true});

    })

    return (
        <Wrapper>
            <NicknameForm/>
        </Wrapper>

    )
}

export default Welcome
