import {FormHelperText, Slider, SwitchBox, SwitchInput, Wrapper} from "./Switch.styles";

function Switch() {

    return (
        <Wrapper>
            <FormHelperText>Potwierdź Gotowość</FormHelperText>
            <SwitchBox>
                <SwitchInput id="status-input" type="checkbox"/>
                <Slider className="slider"></Slider>
            </SwitchBox>
        </Wrapper>
    )
}

export default Switch
