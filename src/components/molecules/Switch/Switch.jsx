import {FormHelperText, Slider, SwitchBox, SwitchInput, Wrapper} from "./Switch.styles";
import {useContext, useState} from "react";
import {SocketContext} from "../../../context/socket";
import useSocket from "../../../context/useSocket";


function Switch() {

    const {emitChangeStatus} = useSocket()
    const [isReady, setIsReady] = useState(false)
    const [isSetting, setIsSetting] = useState(false)

    const handleSliderChange = () => {
        if (isSetting) return

        emitChangeStatus(isReady)
        setIsSetting(true)
        setIsReady(state => !state)

        //preventing from clicking
        setTimeout(() => setIsSetting(false), 400)
    }

    return (
        <Wrapper>
            <FormHelperText>Potwierdź swoją gotowość</FormHelperText>
            <SwitchBox>
                <SwitchInput id="status-input" type="checkbox" value={isReady} disabled={isSetting}
                             onChange={handleSliderChange}/>
                <Slider className="slider"></Slider>
            </SwitchBox>
        </Wrapper>
    )
}

export default Switch
