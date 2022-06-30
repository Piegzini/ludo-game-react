import Welcome from "./components/templates/Welcome/Welcome";
import Lobby from "./components/templates/Lobby/Lobby";
import background from './assets/backgrounds/background.png'
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import {useSelector} from "react-redux";
import Board from "./components/templates/Board/Board";
import useSocket from "./context/useSocket";


function App() {
    const user = useSelector(state => state.user)
    const game = useSelector(state => state.game)
    useSocket()

    return (
        <div className="App"
             style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Welcome/>}/>
                        <Route path="lobby"
                               element={user.id ? <Lobby/> : <Navigate replace to="/"/>}/>
                        <Route path="game"
                               element={game.id ? <Board/> : <Navigate replace to="/"/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
