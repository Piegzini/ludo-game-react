import {Content, Nick, Status} from "./PlayerCard.styles";
import PropTypes from "prop-types";

function PlayerCard({nick, color, isReady}) {

    return (
        <Content color={color}>
            <Nick>{nick}</Nick>
            <Status>{isReady ? 'Gotowy' : 'Nie gotowy'}</Status>
        </Content>
    )

}

PlayerCard.propTypes = {
    nick: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    isReady: PropTypes.bool.isRequired,
}

export default PlayerCard
