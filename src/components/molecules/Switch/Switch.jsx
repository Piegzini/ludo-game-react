import {FormHelperText, Slider, SwitchBox, SwitchInput, Wrapper} from "./Switch.styles";
import {useEffect, useState} from "react";
import {socket} from "../../../helpers/constants";

function Switch() {
    const [isReady, setIsReady] = useState(false)
    useEffect(() => {
        socket.emit('CHANGE_STATUS', {isReady})
    }, [isReady])
    return (
        <Wrapper>
            <FormHelperText>Potwierdź swoją gotowość</FormHelperText>
            <SwitchBox>
                <SwitchInput id="status-input" type="checkbox" value={isReady}
                             onChange={() => setIsReady(state => !state)}/>
                <Slider className="slider"></Slider>
            </SwitchBox>
        </Wrapper>
    )
}

export default Switch
